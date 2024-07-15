use std::fs;

pub fn template(title: &str, content: &str) -> String {
    let layout = fs::read_to_string("templates/layout.html").expect("Layout template not found.");
    let header = fs::read_to_string("templates/header.html").expect("Header template not found.");
    let navigation =
        fs::read_to_string("templates/navigation.html").expect("Navigation template not found.");
    let footer = fs::read_to_string("templates/footer.html").expect("Footer template not found.");

    layout
        .replace("{{ title }}", title)
        .replace("{{ header }}", &header)
        .replace("{{ navigation }}", &navigation)
        .replace("{{ content }}", content)
        .replace("{{ footer }}", &footer)
}
