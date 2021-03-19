const books = document.querySelectorAll('#book-list li .name')
books.forEach(book => {
    book.textContent += ' (book title)'
});

const list = document.querySelector('#book-list')

list.innerHTML += `<p>this how you add html</p>`

const banner = document.querySelector('#page-banner')
console.log(banner.nodeType)
console.log(banner.nodeName)
console.log(banner.hasChildNodes())

//full clone of node, needs true passed into function call
// entire node 
const bannerClone = banner.cloneNode(true)
console.log(bannerClone)

// partial clone of banner node using false into function call
// just div with page-banner id
const bannerClone2 = banner.cloneNode(false)
console.log(bannerClone2)