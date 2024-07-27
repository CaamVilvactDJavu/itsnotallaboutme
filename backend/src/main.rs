use axum::extract::FromRef;
use axum_extra::extract::cookie::Key;
use shuttle_runtime::SecretStore;
use std::path::PathBuf;
mod router;
use router::create_router;

#[derive(Clone)]
pub struct AppState {
    key: Key,
    domain: String,
}

impl FromRef<AppState> for Key {
    fn from_ref(state: &AppState) -> Self {
        state.key.clone()
    }
}

#[shuttle_runtime::main]
async fn axum(#[shuttle_runtime::Secrets] secrets: SecretStore) -> shuttle_axum::ShuttleAxum {
    let domain = secrets
        .get("DOMAIN")
        .expect("You need to set your DOMAIN secret!");
    let state = AppState {
        key: Key::generate(),
        domain,
    };

    // Define the path to the static files
    let static_folder = PathBuf::from("static");

    let router = create_router(static_folder, state);
    Ok(router.into())
}
