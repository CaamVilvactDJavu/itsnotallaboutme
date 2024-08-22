#!/bin/bash

# Set the file path where the books will be stored
file_path="../bookshelfs//bookshelf.json"

# List of all books with their titles, authors, and genres
books=(
    "\"The Case Book of Sherlock Holmes\" \"Sir Arthur Conan Doyle\" \"Detective\""
    "\"The Return of Sherlock Holmes\" \"Sir Arthur Conan Doyle\" \"Detective\""
    "\"Berfilsafat itu gampang (Mabadi al-Falsafah wa al-Akhlaq)\" \"Dr. Abdul Hamid Mutawalli, Dr. Fu'ad Farid Isma'il\" \"Philosophy\""
    "\"Tahafut Al-Falasifah (The Incoherence of the Philosophers)\" \"Imam al-Ghazali\" \"Philosophy\""
    "\"Sejarah Pemikiran Barat: Dari yang Klasik Sampai yang Modern\" \"Sutarjo Adisusilo JR\" \"Philosophy\""
    "\"Intisari Sejarah Dunia: Dari Zaman Prasejarah Sampai Dunia Kontemporer\" \"Ahmad Sobirin\" \"History\""
    "\"Misteri Patung Garam\" \"Ruwi Meita\" \"Mystery\""
    "\"Petak Umpet Minako\" \"Manhalfgod\" \"Mystery\""
    "\"Sherlock Holmes Best Of The Best Stories 19 Petualangan Terbaik\" \"Sir Arthur Conan Doyle\" \"Detective\""
    "\"Sejarah Bangsa Israel dalam Bibel dan Al-Quran\" \"Louay Fatoohi, Shetha Dargazelli\" \"History\""
    "\"Sains berbasis Al-Qur'an\" \"Ridwan Abdullah Sani\" \"Science\""
    "\"Sokrates Dalam Tetralogi Plato\" \"Ioanes Rakhmat\" \"Philosophy\""
    "\"Mencari Kembali Tuhan yang Hilang\" \"Deni Sutan Bahtiar\" \"Religion\""
    "\"Absolute Justice - 絶対正義\" \"Akiyoshi Rikako\" \"Mystery\""
    "\"Memory of Glass - ガラスの記憶\" \"Akiyoshi Rikako\" \"Mystery\""
    "\"Meneladani Kepemimpinan Khalifah\" \"Abdullah Munib El-Basyiry\" \"Religion\""
    "\"Sejarah Tuhan\" \"Karen Armstrong\" \"Religion\""
    "\"Logika Agama\" \"M. Quraish Shihab\" \"Philosophy\""
    "\"Ayat-ayat Semesta\" \"Agus Purwanto\" \"Science\""
    "\"Giselle - ジゼル\" \"Akiyoshi Rikako\" \"Mystery\""
    "\"Your Name. - 君の名は。\" \"Shinkai Makoto\" \"Fantasy\""
    "\"Dunia Sophie\" \"Jostein Gaarder\" \"Philosophy\""
    "\"Credit Roll of the Fool - 愚者のエンドロール (Series 2)\" \"Yonezawa Honobu\" \"Mystery\""
    "\"Minhajul 'Abidin; 7 Tahapan Menuju Puncak Ahli Ibadah\" \"Imam al-Ghazali\" \"Religion\""
    "\"Misteri Keajaiban Isra' Mi'raj\" \"Abu Majdi Haraki\" \"Religion\""
    "\"Filsafat Sejarah\" \"Ahmad Sahidin, Ajid Thohir\" \"Philosophy\""
    "\"The Complete Sherlock Holmes\" \"Sir Arthur Conan Doyle\" \"Detective\""
    "\"The Choice Dialog Islam-Kristen\" \"Ahmed Deedat\" \"Religion\""
    "\"Holy Mother - 聖母\" \"Akiyoshi Rikako\" \"Mystery\""
    "\"Weathering with You - 天気の子\" \"Shinkai Makoto\" \"Fantasy\""
    "\"Hyouka - 氷菓 (Series 1)\" \"Yonezawa Honobu\" \"Mystery\""
    "\"The Da Vinci Code\" \"Dan Brown\" \"Detective\""
    "\"Harry Potter dan Batu Bertuah\" \"J. K. Rowling\" \"Fantasy\""
    "\"Biografi Angka Nol\" \"Charles Seife\" \"Non-fiction\""
    "\"Tahafut At-Tahafut\" \"Simon Van Den Bergh\" \"Philosophy\""
    "\"Apa itu yang dinamakan ILMU?\" \"A. F. Chalmers\" \"Philosophy\""
    "\"100 Penemuan Sains Terhebat Sepanjang Masa\" \"Kendall Haven\" \"Science\""
    "\"My Brief History\" \"Stephen Hawking\" \"Biography\""
)

# Loop through each book and run the CLI command
for book in "${books[@]}"; do
    IFS='"' read -r -a params <<<"$book"
    ../target/debug/cli --file-path "$file_path" --title "${params[1]}" --author "${params[3]}" --genre "${params[5]}"
done
