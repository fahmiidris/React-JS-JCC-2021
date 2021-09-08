var readBooks = require('./callback.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'komik', timeSpent: 1000 }
]

// Jawab
// Menggunakan function recursive

function execute(time, books, index) {
    if (index < books.length) {
        readBooks(time, books[index], function (sisa) {
            if (sisa > 0) {
                index += 1
                execute(sisa, books, index)
            }
        })
    }
}

// menjalankan fungsi execute dengan parameter waktu, array buku, dan index yang dimulai dari 0
execute(10000, books, 0)