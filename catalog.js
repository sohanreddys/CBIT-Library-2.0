const books = [
    { title: "Data Structures and Algorithms", author: "Alfred V. Aho", image: "https://m.media-amazon.com/images/I/71kBRLo8ZtL._AC_UF1000,1000_QL80_.jpg" },
    { title: "Digital Logic Design", author: "Brian Holdsworth", image: "https://m.media-amazon.com/images/I/81cjFYtX2OL._AC_UF1000,1000_QL80_.jpg" },
    { title: "Web Technologies", author: "Uttam K.", image: "https://m.media-amazon.com/images/I/51xAqEKyaRL.jpg" },
    { title: "Database Management Systems", author: "Dr. Ravi Chopra", image: "https://m.media-amazon.com/images/I/71pRxT2P0gL._AC_UF1000,1000_QL80_.jpg" },
    { title: "Systems and Signal Processing", author: "Ulrich Karrenberg", image: "https://media.springernature.com/full/springer-static/cover-hires/book/978-3-642-38053-2" }
];

function loadBooks() {
    const catalogContainer = document.getElementById('bookCatalog');
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('col-md-4', 'mb-4');
        bookItem.innerHTML = `
            <div class="card">
                <img src="${book.image}" class="card-img-top" alt="${book.title}" style="width: 100%; height: 300px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.author}</p>
                </div>
            </div>
        `;
        catalogContainer.appendChild(bookItem);
    });
}

window.onload = loadBooks;
