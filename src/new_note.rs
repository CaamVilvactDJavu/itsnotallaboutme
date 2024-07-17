use crate::template::template;
use std::fs;

pub fn new_note() -> String {
    let content =
        fs::read_to_string("templates/content/notes/new_note.html").expect("New note not found.");

    template("New Note", &content)
}
