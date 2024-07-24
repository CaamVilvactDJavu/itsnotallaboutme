use crate::structs::AppState;
use crate::template::template;
use base64::{engine::general_purpose, Engine as _};
use pulldown_cmark::{html, Parser};
use serde_json;
use std::sync::Arc;

pub async fn note_content(id: String, state: Arc<AppState>) -> String {
    let url = format!(
        "https://api.github.com/repos/{}/{}/contents/content/notes/{}.md",
        state.repo_owner, state.repo_name, id
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
        // Ensure that base64 content is properly formatted
        let base64_content = content.replace('\n', "");
        let markdown_content =
            String::from_utf8(base64::decode(&base64_content).expect("Failed to decode base64"))
                .expect("Failed to convert to UTF-8");
        let parser = Parser::new(&markdown_content);
        let mut html_output = String::new();
        html::push_html(&mut html_output, parser);
        let html_content = format!(r#"<div id="note-content">{}</div>"#, html_output);
        template("Note", &html_content)
    } else {
        template("Note", "Note content not found.")
    }
}
