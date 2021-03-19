const books = document.querySelectorAll('#book-list li .name')
books.forEach(book => {
    book.textContent += ' (book title)'
});

const list = document.querySelector('#book-list')

list.innerHTML += `<p>this how you add html</p>`