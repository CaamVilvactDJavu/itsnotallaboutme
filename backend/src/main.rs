use axum::extract::FromRef;
use axum_extra::extract::cookie::Key;
use shuttle_runtime::SecretStore;
use sqlx::SqlitePool;
use std::path::PathBuf;
mod cli;
mod router;
use router::create_router;

#[derive(Clone)]
pub struct AppState {
    key: Key,
    domain: String,
    db: SqlitePool,
}

impl FromRef<AppState> for Key {
    fn from_ref(state: &AppState) -> Self {
        state.key.clone()
    }
}

async fn init_db(pool: &SqlitePool) -> Result<(), sqlx::Error> {
    sqlx::query(
        "CREATE TABLE IF NOT EXISTS visitors (
            id INTEGER PRIMARY KEY,
            count INTEGER NOT NULL DEFAULT 0
        )",
    )
    .execute(pool)
    .await?;

    sqlx::query("INSERT OR IGNORE INTO visitors (id, count) VALUES (1, 0)")
        .execute(pool)
        .await?;

    Ok(())
}

#[shuttle_runtime::main]
async fn axum(#[shuttle_runtime::Secrets] secrets: SecretStore) -> shuttle_axum::ShuttleAxum {
    let domain = secrets
        .get("DOMAIN")
        .expect("You need to set your DOMAIN secret!");

    let database_url = "sqlite:visitors.db";
    let pool = SqlitePool::connect(database_url)
        .await
        .expect("Failed to connect to SQLite");

    init_db(&pool).await.expect("Failed to initialize database");

    let state = AppState {
        key: Key::generate(),
        domain,
        db: pool,
    };

    let static_folder = PathBuf::from("static");

    let router = create_router(static_folder, state);
    Ok(router.into())
}
