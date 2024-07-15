use crate::template::template;
use markdown::file_to_html;
use std::path::Path;

pub fn notes_content() -> String {
    let markdown_path = Path::new("markdown/note.md");
    let content = match file_to_html(markdown_path) {
        Ok(html) => html,
        Err(e) => format!("Error converting markdown to HTML: {}", e),
    };

    template("Notes", &content)
}
