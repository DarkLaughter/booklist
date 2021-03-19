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

//dom traversal

const booklst = document.querySelector('#book-list')
// states parent node, mostly do the same thing
console.log(booklst.parentNode)
console.log(booklst.parentElement)
// grabbing the parent of the parent
console.log(booklst.parentElement.parentElement)

//referencing children nodes, grabs all nodes 
console.log(booklst.childNodes)

// grab child node elements
console.log(booklst.children)

