use axum::{
    extract::Query,
    response::{Html, Json},
    routing::{get, get_service, Router},
};
use import::{
    about::about_content, home::home_content, new_note::new_note, note::note_content,
    notes::notes_content,
};
use serde::{Deserialize, Serialize};
use std::fs;
use std::path::Path;
use tower_http::{services::ServeDir, trace::TraceLayer};

#[derive(Deserialize)]
struct PageQuery {
    page: Option<String>,
    id: Option<String>,
}

#[derive(Clone, Serialize, Deserialize)]
struct Note {
    id: String,
    title: String,
    content: String,
}

async fn page_handler(Query(params): Query<PageQuery>) -> Html<String> {
    let content = match (params.page.as_deref(), params.id) {
        (Some("new_note"), _) => new_note(),
        (Some("notes"), _) => notes_content(),
        (Some("note"), Some(id)) => note_content(id).await,
        (Some("about"), _) => about_content(),
        _ => home_content(),
    };
    Html(content)
}

async fn get_notes() -> Json<Vec<Note>> {
    let notes_dir = Path::new("notes");
    let mut notes = Vec::new();

    if let Ok(entries) = fs::read_dir(notes_dir) {
        for entry in entries {
            if let Ok(entry) = entry {
                if let Ok(metadata) = entry.metadata() {
                    if metadata.is_file() {
                        if let Some(file_name) = entry.file_name().to_str() {
                            if file_name.ends_with(".md") {
                                let id = file_name.trim_end_matches(".md").to_string();
                                if let Ok(content) = fs::read_to_string(entry.path()) {
                                    let title = content
                                        .lines()
                                        .next()
                                        .unwrap_or("Untitled")
                                        .trim_start_matches("# ")
                                        .to_string();
                                    notes.push(Note { id, title, content });
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    Json(notes)
}

async fn save_note(axum::extract::Json(new_note): axum::extract::Json<Note>) -> Html<String> {
    let notes_dir = Path::new("notes");
    if !notes_dir.exists() {
        fs::create_dir(notes_dir).expect("Failed to create notes directory");
    }

    let file_path = notes_dir.join(format!("{}.md", new_note.id));
    fs::write(file_path, &new_note.content).expect("Failed to save note");

    Html("Note saved successfully".to_string())
}

#[shuttle_runtime::main]
async fn main() -> shuttle_axum::ShuttleAxum {
    let app = Router::new()
        .route("/", get(page_handler))
        .route("/api/notes", get(get_notes).post(save_note))
        .nest_service("/static", get_service(ServeDir::new("static")))
        .layer(TraceLayer::new_for_http());

    Ok(app.into())
}
