use clap::Parser;
use serde::{Deserialize, Serialize};
use serde_json::de::IoRead;
use std::collections::HashMap;
use std::fs::File;
use std::io::{BufReader, BufWriter, Result as IoResult};
use std::path::PathBuf;

#[derive(Serialize, Deserialize, Clone)]
struct Book {
    title: String,
    genre: String,
    author: String,
}

#[derive(Parser)]
#[command(name = "Bookshelf CLI")]
#[command(about = "A CLI to manage your bookshelf", long_about = None)]
struct Cli {
    #[arg(long, help = "File path to the JSON where books are stored")]
    file_path: String,

    #[arg(long, help = "The title of the book")]
    title: Option<String>,

    #[arg(long, help = "The author of the book")]
    author: Option<String>,

    #[arg(long, help = "The genre of the book")]
    genre: Option<String>,
}

fn save_books_to_file(books: &HashMap<usize, Book>, file_path: &str) -> IoResult<()> {
    let file = File::create(file_path)?;
    let writer = BufWriter::new(file);
    serde_json::to_writer(writer, &books)?;
    Ok(())
}

fn load_books_from_file(file_path: &str) -> IoResult<HashMap<usize, Book>> {
    if !PathBuf::from(file_path).exists() {
        return Ok(HashMap::new());
    }

    let file = File::open(file_path)?;
    let reader = BufReader::new(file);
    let books = serde_json::from_reader(reader).unwrap_or_default();
    Ok(books)
}

fn get_next_key(books: &HashMap<usize, Book>) -> usize {
    books.keys().cloned().max().unwrap_or(0) + 1
}

fn add_books(file_path: &str, new_book: Book) -> IoResult<()> {
    let mut books = load_books_from_file(file_path)?;

    let next_key = get_next_key(&books);
    books.insert(next_key, new_book);

    save_books_to_file(&books, file_path)?;
    Ok(())
}

fn main() {
    let cli = Cli::parse();

    if let (Some(title), Some(author), Some(genre)) = (cli.title, cli.author, cli.genre) {
        let book = Book {
            title,
            author,
            genre,
        };

        if let Err(e) = add_books(&cli.file_path, book) {
            eprintln!("Failed to add book via CLI: {}", e);
        }
    } else {
        eprintln!("All book details (title, author, genre) are required.");
    }
}
