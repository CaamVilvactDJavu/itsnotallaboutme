use crate::template::template;
use pulldown_cmark::{html, Parser};
use std::fs;

pub async fn note_content(id: String) -> String {
    let file_path = format!("notes/{}.md", id);
    let markdown_content =
        fs::read_to_string(file_path).unwrap_or_else(|_| "Note not found".to_string());

    let parser = Parser::new(&markdown_content);
    let mut html_output = String::new();
    html::push_html(&mut html_output, parser);

    let html_content = format!(r#"<div id="note-content">{}</div>"#, html_output);

    template("Note", &html_content)
}
