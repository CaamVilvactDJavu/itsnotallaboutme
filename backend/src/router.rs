use crate::AppState;
use axum::{
    http::StatusCode,
    response::{IntoResponse, Response},
    Router,
};
use http::{
    header::{ACCEPT, AUTHORIZATION, ORIGIN},
    HeaderValue, Method,
};
use std::path::PathBuf;
use tower_http::cors::CorsLayer;
use tower_http::services::ServeDir;

pub fn api_router(state: AppState) -> Router {
    let cors = CorsLayer::new()
        .allow_credentials(true)
        .allow_methods(vec![Method::GET, Method::POST, Method::PUT, Method::DELETE])
        .allow_headers(vec![ORIGIN, AUTHORIZATION, ACCEPT])
        .allow_origin(state.domain.parse::<HeaderValue>().unwrap());
    Router::new().with_state(state).layer(cors)
}

pub fn create_router(static_folder: PathBuf, state: AppState) -> Router {
    let api_router = api_router(state);
    Router::new()
        .nest("/api", api_router)
        .fallback_service(ServeDir::new(static_folder).append_index_html_on_directories(true))
}

pub async fn health_check() -> Response {
    (StatusCode::OK, "OK!").into_response()
}
