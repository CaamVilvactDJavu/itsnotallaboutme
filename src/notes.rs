use crate::template::template;
use markdown::file_to_html;
use std::fs;
use std::path::Path;

pub fn notes_content() -> String {
    let notes_content = fs::read_to_string("templates/content/notes/notes_content.html")
        .expect("Note content not found.");
    let markdown_path = Path::new("markdown/note.md");
    let markdown = match file_to_html(markdown_path) {
        Ok(html) => html,
        Err(e) => format!("Error converting markdown to HTML: {}", e),
    };

    let content = notes_content.replace("<!--content-->", &markdown);

    template("Notes", &content)
}
