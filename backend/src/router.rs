use crate::AppState;
use axum::extract::State;
use axum::http::StatusCode;
use axum::response::Json;
use axum::{extract::Path, response::IntoResponse, Router};
use http::{
    header::{ACCEPT, AUTHORIZATION, ORIGIN},
    HeaderValue, Method,
};
use serde::Serialize;
use serde_json::json;
use std::fs;
use std::path::PathBuf;
use tower_cookies::CookieManagerLayer;
use tower_cookies::{Cookie, Cookies};
use tower_http::cors::CorsLayer;
use tower_http::services::ServeDir;

#[derive(Serialize)]
struct Note {
    filename: String,
    title: String,
    content: String,
}

pub fn api_router(state: AppState) -> Router {
    let cors = CorsLayer::new()
        .allow_origin(["http://localhost:3000".parse().unwrap()])
        .allow_credentials(true)
        .allow_methods(vec![Method::GET, Method::POST, Method::PUT, Method::DELETE])
        .allow_headers(vec![ORIGIN, AUTHORIZATION, ACCEPT])
        .allow_origin(state.domain.parse::<HeaderValue>().unwrap());

    Router::new()
        .route("/notes", axum::routing::get(list_notes))
        .route("/notes/:filename", axum::routing::get(get_note))
        .route("/memoirs", axum::routing::get(list_memoirs))
        .route("/memoirs/:filename", axum::routing::get(get_memoir))
        .route("/visitors", axum::routing::get(get_visitors))
        .route(
            "/visitors/increment",
            axum::routing::post(increment_visitors),
        )
        .with_state(state)
        .layer(cors)
}

pub async fn get_visitors(State(state): State<AppState>) -> impl IntoResponse {
    match sqlx::query_scalar::<_, i64>("SELECT count FROM visitors WHERE id = 1")
        .fetch_one(&state.db)
        .await
    {
        Ok(count) => Json(json!({ "count": count })).into_response(),
        Err(_) => (
            StatusCode::INTERNAL_SERVER_ERROR,
            "Failed to get visitor count",
        )
            .into_response(),
    }
}

pub async fn increment_visitors(
    State(state): State<AppState>,
    cookies: Cookies,
) -> impl IntoResponse {
    let visited_cookie = cookies.get("visited");

    if visited_cookie.is_none() {
        // Increment the visitor count
        match sqlx::query("UPDATE visitors SET count = count + 1 WHERE id = 1")
            .execute(&state.db)
            .await
        {
            Ok(_) => {
                // Set the 'visited' cookie to prevent multiple increments
                cookies.add(Cookie::new("visited", "true"));
                StatusCode::OK.into_response()
            }
            Err(_) => (
                StatusCode::INTERNAL_SERVER_ERROR,
                "Failed to increment visitor count",
            )
                .into_response(),
        }
    } else {
        StatusCode::OK.into_response()
    }
}

pub async fn list_notes() -> impl IntoResponse {
    let notes_dir = "notes";
    let mut notes_list = Vec::new();

    if let Ok(entries) = fs::read_dir(notes_dir) {
        for entry in entries.filter_map(Result::ok) {
            let path = entry.path();
            if path.is_file() {
                let filename = path
                    .file_stem()
                    .unwrap_or_default()
                    .to_str()
                    .unwrap_or_default();
                let path_str = path.display().to_string();
                if let Ok(content) = fs::read_to_string(&path_str) {
                    let (title, content) = parse_markdown(&content);
                    notes_list.push(Note {
                        filename: filename.to_string(),
                        title,
                        content,
                    });
                }
            }
        }
    }

    (StatusCode::OK, Json(notes_list)).into_response()
}

pub async fn list_memoirs() -> impl IntoResponse {
    let memoirs_dir = "memoirs";
    let mut memoirs_list = Vec::new();

    if let Ok(entries) = fs::read_dir(memoirs_dir) {
        for entry in entries.filter_map(Result::ok) {
            let path = entry.path();
            if path.is_file() {
                let filename = path
                    .file_stem()
                    .unwrap_or_default()
                    .to_str()
                    .unwrap_or_default();
                let path_str = path.display().to_string();
                if let Ok(content) = fs::read_to_string(&path_str) {
                    let (title, content) = parse_markdown(&content);
                    memoirs_list.push(Note {
                        filename: filename.to_string(),
                        title,
                        content,
                    });
                }
            }
        }
    }

    (StatusCode::OK, Json(memoirs_list)).into_response()
}

pub async fn get_note(Path(filename): Path<String>) -> impl IntoResponse {
    let path = PathBuf::from(format!("notes/{}.md", filename));
    println!("Attempting to read file at path: {:?}", path);

    match fs::read_to_string(&path) {
        Ok(content) => {
            let (title, content) = parse_markdown(&content);
            let note = Note {
                filename: filename.clone(),
                title,
                content,
            };
            (StatusCode::OK, Json(note)).into_response()
        }
        Err(err) => {
            println!("Error reading file: {:?}", err);
            (StatusCode::NOT_FOUND, "Note not found").into_response()
        }
    }
}

pub async fn get_memoir(Path(filename): Path<String>) -> impl IntoResponse {
    let path = PathBuf::from(format!("memoirs/{}.md", filename));
    println!("Attempting to read file at path: {:?}", path);

    match fs::read_to_string(&path) {
        Ok(content) => {
            let (title, content) = parse_markdown(&content);
            let note = Note {
                filename: filename.clone(),
                title,
                content,
            };
            (StatusCode::OK, Json(note)).into_response()
        }
        Err(err) => {
            println!("Error reading file: {:?}", err);
            (StatusCode::NOT_FOUND, "Note not found").into_response()
        }
    }
}

fn parse_markdown(content: &str) -> (String, String) {
    let lines: Vec<&str> = content.lines().collect();

    let title = lines.first().unwrap_or(&"").to_string();
    let content = lines
        .iter()
        .skip(2)
        .cloned()
        .collect::<Vec<&str>>()
        .join("\n");

    (title, content)
}

pub fn create_router(static_folder: PathBuf, state: AppState) -> Router {
    let api_router = api_router(state);

    Router::new()
        .nest("/api", api_router)
        .fallback_service(ServeDir::new(static_folder).append_index_html_on_directories(true))
        .layer(CookieManagerLayer::new())
}
