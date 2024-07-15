use axum::{
    extract::Query,
    response::Html,
    routing::{get, get_service, Router},
};
use import::{about::about_content, home::home_content, notes::notes_content};
use serde::Deserialize;
use tower_http::{services::ServeDir, trace::TraceLayer};

#[derive(Deserialize)]
struct PageQuery {
    page: Option<String>,
}

async fn page_handler(Query(params): Query<PageQuery>) -> Html<String> {
    let content = match params.page.as_deref() {
        Some("notes") => notes_content(),
        Some("about") => about_content(),
        _ => home_content(),
    };
    Html(content)
}

#[shuttle_runtime::main]
async fn main() -> shuttle_axum::ShuttleAxum {
    let app = Router::new()
        .route("/", get(page_handler))
        .nest_service("/static", get_service(ServeDir::new("static")))
        .layer(TraceLayer::new_for_http());

    Ok(app.into())
}
