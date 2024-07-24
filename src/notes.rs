use crate::template::template;
use markdown::file_to_html;
use std::fs;
use std::path::Path;

pub fn notes_content() -> String {
    let notes_content = fs::read_to_string("templates/content/notes/notes_content.html")
        .expect("Note content not found.");
    template("Notes", &notes_content)
}
