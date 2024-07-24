use reqwest::Client;
use serde::{Deserialize, Serialize};

#[derive(Deserialize)]
pub struct PageQuery {
    pub page: Option<String>,
    pub id: Option<String>,
}

#[derive(Clone, Serialize, Deserialize)]
pub struct Note {
    pub id: String,
    pub title: String,
    pub content: String,
}

#[derive(Clone)]
pub struct AppState {
    pub client: Client,
    pub github_token: String,
    pub repo_owner: String,
    pub repo_name: String,
}
