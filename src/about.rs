use crate::template::template;
use std::fs;

pub fn about_content() -> String {
    let about_content = fs::read_to_string("templates/content/about/about_content.html")
        .expect("About content not found.");
    let skills = fs::read_to_string("templates/content/about/skills.html")
        .expect("Skills content not found.");
    let projects = fs::read_to_string("templates/content/about/projects.html")
        .expect("Projects content not found.");

    let content = about_content
        .replace("{{ skills }}", &skills)
        .replace("{{ projects }}", &projects);

    template("About", &content)
}
