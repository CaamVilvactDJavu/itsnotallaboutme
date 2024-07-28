use crate::AppState;
use axum::http::StatusCode;
use axum::{extract::Path, response::IntoResponse, Router};
use http::{
    header::{ACCEPT, AUTHORIZATION, ORIGIN},
    HeaderValue, Method,
};
use std::fs;
use std::path::PathBuf;
use tower_http::cors::CorsLayer;
use tower_http::services::ServeDir;

pub fn api_router(state: AppState) -> Router {
    let cors = CorsLayer::new()
        .allow_credentials(true)
        .allow_methods(vec![Method::GET, Method::POST, Method::PUT, Method::DELETE])
        .allow_headers(vec![ORIGIN, AUTHORIZATION, ACCEPT])
        .allow_origin(state.domain.parse::<HeaderValue>().unwrap());

    Router::new()
        .route("/notes/:filename", axum::routing::get(get_note))
        .with_state(state)
        .layer(cors)
}

pub async fn get_note(Path(filename): Path<String>) -> impl IntoResponse {
    let path = PathBuf::from(format!("notes/{}.md", filename));
    println!("Attempting to read file at path: {:?}", path);
    match fs::read_to_string(&path) {
        Ok(content) => (StatusCode::OK, content).into_response(),
        Err(err) => {
            println!("Error reading file: {:?}", err);
            (StatusCode::NOT_FOUND, "Note not found").into_response()
        }
    }
}

pub fn create_router(static_folder: PathBuf, state: AppState) -> Router {
    let api_router = api_router(state);
    Router::new()
        .nest("/api", api_router)
        .fallback_service(ServeDir::new(static_folder).append_index_html_on_directories(true))
}
