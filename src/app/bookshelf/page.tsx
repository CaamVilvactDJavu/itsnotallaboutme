interface Book {
  name: string;
  author: string;
  genre: string;
}

interface GroupedBooks {
  [genre: string]: Book[];
}

export default function BookshelfPage() {
  const books: Book[] = [
    {
      name: "The Case Book of Sherlock Holmes",
      author: "Sir Arthur Conan Doyle",
      genre: "Detective",
    },
    {
      name: "The Return of Sherlock Holmes",
      author: "Sir Arthur Conan Doyle",
      genre: "Detective",
    },
    {
      name: "Berfilsafat itu gampang (Mabadi al-Falsafah wa al-Akhlaq)",
      author: "Dr. Abdul Hamid Mutawalli, Dr. Fu'ad Farid Isma'il",
      genre: "Philosophy",
    },
    {
      name: "Tahafut Al-Falasifah (The Incoherence of the Philosophers)",
      author: "Imam al-Ghazali",
      genre: "Philosophy",
    },
    {
      name: "Sejarah Pemikiran Barat: Dari yang Klasik Sampai yang Modern",
      author: "Sutarjo Adisusilo JR",
      genre: "Philosophy",
    },
    {
      name: "Intisari Sejarah Dunia: Dari Zaman Prasejarah Sampai Dunia Kontemporer",
      author: "Ahmad Sobirin",
      genre: "History",
    },
    { name: "Misteri Patung Garam", author: "Ruwi Meita", genre: "Mystery" },
    { name: "Petak Umpet Minako", author: "Manhalfgod", genre: "Mystery" },
    {
      name: "Sherlock Holmes Best Of The Best Stories 19 Petualangan Terbaik",
      author: "Sir Arthur Conan Doyle",
      genre: "Detective",
    },
    {
      name: "Sejarah Bangsa Israel dalam Bibel dan Al-Quran",
      author: "Louay Fatoohi, Shetha Dargazelli",
      genre: "History",
    },
    {
      name: "Sains berbasis Al-Qur'an",
      author: "Ridwan Abdullah Sani",
      genre: "Science",
    },
    {
      name: "Sokrates Dalam Tetralogi Plato",
      author: "Ioanes Rakhmat",
      genre: "Philosophy",
    },
    {
      name: "Mencari Kembali Tuhan yang Hilang",
      author: "Deni Sutan Bahtiar",
      genre: "Religion",
    },
    {
      name: "Absolute Justice - 絶対正義",
      author: "Akiyoshi Rikako",
      genre: "Mystery",
    },
    {
      name: "Memory of Glass - ガラスの記憶",
      author: "Akiyoshi Rikako",
      genre: "Mystery",
    },
    {
      name: "Meneladani Kepemimpinan Khalifah",
      author: "Abdullah Munib El-Basyiry",
      genre: "Religion",
    },
    { name: "Sejarah Tuhan", author: "Karen Armstrong", genre: "Religion" },
    { name: "Logika Agama", author: "M. Quraish Shihab", genre: "Philosophy" },
    { name: "Ayat-ayat Semesta", author: "Agus Purwanto", genre: "Science" },
    { name: "Giselle - ジゼル", author: "Akiyoshi Rikako", genre: "Mystery" },
    {
      name: "Your Name. - 君の名は。",
      author: "Shinkai Makoto",
      genre: "Fantasy",
    },
    { name: "Dunia Sophie", author: "Jostein Gaarder", genre: "Philosophy" },
    {
      name: "Credit Roll of the Fool - 愚者のエンドロール (Series 2)",
      author: "Yonezawa Honobu",
      genre: "Mystery",
    },
    {
      name: "Minhajul 'Abidin; 7 Tahapan Menuju Puncak Ahli Ibadah",
      author: "Imam al-Ghazali",
      genre: "Religion",
    },
    {
      name: "Misteri Keajaiban Isra' Mi'raj",
      author: "Abu Majdi Haraki",
      genre: "Religion",
    },
    {
      name: "Filsafat Sejarah",
      author: "Ahmad Sahidin, Ajid Thohir",
      genre: "Philosophy",
    },
    {
      name: "The Complete Sherlock Holmes",
      author: "Sir Arthur Conan Doyle",
      genre: "Detective",
    },
    {
      name: "The Choice Dialog Islam-Kristen",
      author: "Ahmed Deedat",
      genre: "Religion",
    },
    { name: "Holy Mother - 聖母", author: "Akiyoshi Rikako", genre: "Mystery" },
    {
      name: "Weathering with You - 天気の子",
      author: "Shinkai Makoto",
      genre: "Fantasy",
    },
    {
      name: "Hyouka - 氷菓 (Series 1)",
      author: "Yonezawa Honobu",
      genre: "Mystery",
    },
    { name: "The Da Vinci Code", author: "Dan Brown", genre: "Detective" },
    {
      name: "Harry Potter dan Batu Bertuah",
      author: "J. K. Rowling",
      genre: "Fantasy",
    },
    {
      name: "Biografi Angka Nol",
      author: "Charles Seife",
      genre: "Non-fiction",
    },
    {
      name: "Tahafut At-Tahafut",
      author: "Simon Van Den Bergh",
      genre: "Philosophy",
    },
    {
      name: "Apa itu yang dinamakan ILMU?",
      author: "A. F. Chalmers",
      genre: "Philosophy",
    },
    {
      name: "100 Penemuan Sains Terhebat Sepanjang Masa",
      author: "Kendall Haven",
      genre: "Science",
    },
    { name: "My Brief History", author: "Stephen Hawking", genre: "Biography" },
  ];

  const symbols = [" ♠ ", " ❤ ", " ♦ ", " ♣ "];

  const groupedBooks: GroupedBooks = books.reduce((acc, book) => {
    if (!acc[book.genre]) {
      acc[book.genre] = [];
    }
    acc[book.genre].push(book);
    return acc;
  }, {} as GroupedBooks);

  return (
    <main className="mx-auto p-4">
      {Object.keys(groupedBooks).map((genre) => (
        <section key={genre}>
          <h2 className="pt-2">{genre}</h2>
          <ul className="space-y-2">
            {groupedBooks[genre].map((book, bookIndex) => (
              <li key={bookIndex}>
                {bookIndex % symbols.length === 0 && <span>{symbols[0]}</span>}
                {bookIndex % symbols.length === 1 && <span>{symbols[1]}</span>}
                {bookIndex % symbols.length === 2 && <span>{symbols[2]}</span>}
                {bookIndex % symbols.length === 3 && <span>{symbols[3]}</span>}
                <strong>{book.name}</strong> by {book.author}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
