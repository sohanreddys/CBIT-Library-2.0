document.getElementById('searchBar').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm));
    
    const catalogContainer = document.getElementById('bookCatalog');
    catalogContainer.innerHTML = ''; // Clear previous results

    filteredBooks.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('col-md-4', 'mb-4');
        bookItem.innerHTML = `
            <div class="card">
                <img src="${book.image}" class="card-img-top" alt="${book.title}">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.author}</p>
                </div>
            </div>
        `;
        catalogContainer.appendChild(bookItem);
    });
});
