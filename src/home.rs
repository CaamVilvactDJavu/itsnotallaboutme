use crate::template::template;
use std::fs;

pub fn home_content() -> String {
    let content = fs::read_to_string("templates/content/home/home_content.html")
        .expect("Home content not found.");

    template("Home", &content)
}
