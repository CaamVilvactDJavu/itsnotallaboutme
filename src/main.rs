use axum::{
    extract::{Query, State},
    response::{Html, Json},
    routing::{get, Router},
};
use import::{
    about::about_content, home::home_content, new_note::new_note, note::note_content,
    notes::notes_content, structs::AppState, structs::Note, structs::PageQuery,
};
use reqwest::Client;
use shuttle_runtime::SecretStore;
use std::sync::Arc;
use tower_http::{services::ServeDir, trace::TraceLayer};

async fn page_handler(
    Query(params): Query<PageQuery>,
    State(state): State<Arc<AppState>>,
) -> Html<String> {
    let content = match (params.page.as_deref(), params.id) {
        (Some("new_note"), _) => new_note(),
        (Some("notes"), _) => notes_content(),
        (Some("note"), Some(id)) => note_content(id, state).await,
        (Some("about"), _) => about_content(),
        _ => home_content(),
    };

    Html(content)
}

async fn get_notes(State(state): State<Arc<AppState>>) -> Json<Vec<Note>> {
    let url = format!(
        "https://api.github.com/repos/{}/{}/contents/content/notes.json",
        state.repo_owner, state.repo_name
    );

    let response = state
        .client
        .get(&url)
        .header("Authorization", format!("token {}", state.github_token))
        .header("User-Agent", "rust-app")
        .send()
        .await
        .expect("Failed to send request");

    let content: serde_json::Value = response.json().await.expect("Failed to parse JSON");

    if let Some(content) = content.get("content").and_then(|c| c.as_str()) {
        let decoded = base64::decode(content).expect("Failed to decode base64");
        let notes: Vec<Note> = serde_json::from_slice(&decoded).expect("Failed to parse notes");
        Json(notes)
    } else {
        Json(vec![]) // Return an empty list if content is not found
    }
}

async fn save_note(State(state): State<Arc<AppState>>, Json(new_note): Json<Note>) -> Json<String> {
    let url = format!(
        "https://api.github.com/repos/{}/{}/contents/content/notes.json",
        state.repo_owner, state.repo_name
    );

    println!("Fetching from URL: {}", url);

    let response = match state
        .client
        .get(&url)
        .header("Authorization", format!("token {}", state.github_token))
        .header("User-Agent", "rust-app")
        .send()
        .await
    {
        Ok(response) => response,
        Err(e) => {
            eprintln!("Failed to send request: {}", e);
            return Json("Failed to send request.".to_string());
        }
    };

    println!("Response status: {}", response.status());

    if !response.status().is_success() {
        eprintln!("Failed to fetch notes.json: {}", response.status());
        return Json("Failed to fetch notes.json.".to_string());
    }

    let content: serde_json::Value = match response.json().await {
        Ok(content) => content,
        Err(e) => {
            eprintln!("Failed to parse JSON: {}", e);
            return Json("Failed to parse JSON.".to_string());
        }
    };

    println!("Content: {:?}", content);

    if let (Some(sha), Some(content)) = (
        content.get("sha").and_then(|s| s.as_str()),
        content.get("content").and_then(|c| c.as_str()),
    ) {
        let decoded = match base64::decode(content) {
            Ok(decoded) => decoded,
            Err(e) => {
                eprintln!("Failed to decode base64: {}", e);
                return Json("Failed to decode base64.".to_string());
            }
        };

        let mut notes: Vec<Note> = match serde_json::from_slice(&decoded) {
            Ok(notes) => notes,
            Err(e) => {
                eprintln!("Failed to parse notes: {}", e);
                return Json("Failed to parse notes.".to_string());
            }
        };

        notes.push(new_note.clone());

        let updated_content = match serde_json::to_string(&notes) {
            Ok(updated_content) => updated_content,
            Err(e) => {
                eprintln!("Failed to serialize notes: {}", e);
                return Json("Failed to serialize notes.".to_string());
            }
        };

        let encoded_content = base64::encode(&updated_content);

        let update_body = serde_json::json!({
            "message": format!("Add new note: {}", new_note.title),
            "content": encoded_content,
            "sha": sha
        });

        match state
            .client
            .put(&url)
            .header("Authorization", format!("token {}", state.github_token))
            .header("User-Agent", "rust-app")
            .json(&update_body)
            .send()
            .await
        {
            Ok(_) => {
                let note_url = format!(
                    "https://api.github.com/repos/{}/{}/contents/content/notes/{}.md",
                    state.repo_owner, state.repo_name, new_note.id
                );

                let note_body = serde_json::json!({
                    "message": format!("Add note content: {}", new_note.title),
                    "content": base64::encode(&new_note.content)
                });

                match state
                    .client
                    .put(&note_url)
                    .header("Authorization", format!("token {}", state.github_token))
                    .header("User-Agent", "rust-app")
                    .json(&note_body)
                    .send()
                    .await
                {
                    Ok(_) => Json("Note saved successfully".to_string()),
                    Err(e) => {
                        eprintln!("Failed to save note content: {}", e);
                        Json("Failed to save note content.".to_string())
                    }
                }
            }
            Err(e) => {
                eprintln!("Failed to update notes.json: {}", e);
                Json("Failed to update notes.json.".to_string())
            }
        }
    } else {
        eprintln!("Failed to save note. Missing necessary data.");
        Json("Failed to save note. Missing necessary data.".to_string())
    }
}

#[shuttle_runtime::main]
async fn main(#[shuttle_runtime::Secrets] secret_store: SecretStore) -> shuttle_axum::ShuttleAxum {
    let github_token = secret_store
        .get("GITHUB_TOKEN")
        .expect("GITHUB_TOKEN must be set");
    let repo_owner = secret_store
        .get("GITHUB_REPO_OWNER")
        .expect("GITHUB_REPO_OWNER must be set");
    let repo_name = secret_store
        .get("GITHUB_REPO_NAME")
        .expect("GITHUB_REPO_NAME must be set");

    let state = Arc::new(AppState {
        client: Client::new(),
        github_token,
        repo_owner,
        repo_name,
    });

    let app = Router::new()
        .route("/", get(page_handler))
        .route("/api/notes", get(get_notes).post(save_note))
        .nest_service("/static", ServeDir::new("static"))
        .layer(TraceLayer::new_for_http())
        .with_state(state);

    Ok(app.into())
}
