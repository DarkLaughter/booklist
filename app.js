// const books = document.querySelectorAll('#book-list li .name')
// books.forEach(book => {
//     book.textContent += ' (book title)'
// });

// const list = document.querySelector('#book-list')

// list.innerHTML += `<p>this how you add html</p>`

// const banner = document.querySelector('#page-banner')
// console.log(banner.nodeType)
// console.log(banner.nodeName)
// console.log(banner.hasChildNodes())

// //full clone of node, needs true passed into function call
// // entire node 
// const bannerClone = banner.cloneNode(true)
// console.log(bannerClone)

// // partial clone of banner node using false into function call
// // just div with page-banner id
// const bannerClone2 = banner.cloneNode(false)
// console.log(bannerClone2)

// //dom traversal

// const booklst = document.querySelector('#book-list')
// // states parent node, mostly do the same thing
// console.log(booklst.parentNode)
// console.log(booklst.parentElement)
// // grabbing the parent of the parent
// console.log(booklst.parentElement.parentElement)

// //referencing children nodes, grabs all nodes 
// console.log(booklst.childNodes)

// // grab child node elements
// console.log(booklst.children)

// ########


//events 
// const h2 = document.querySelector('#book-list h2')
// h2.addEventListener('click', (e) => {
//     console.log(e)
//     console.log(e.target)
// })

// const btns = document.querySelectorAll('#book-list .delete')

// btns.forEach((btn) => {

//     btn.addEventListener('click', (e) => {
//         const li = e.target.parentElement
//         li.parentNode.removeChild(li)

//     })


// })

// prevent default using new link in page banner
// const link = document.querySelector('#page-banner a')
// link.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log(e.target.textContent)
// })

//event bubbling
// events bubbling through the dom tree
const list = document.querySelector('#book-list ul')

list.addEventListener('click', (e) => {
    if (e.target.className === 'delete') {
        const li = e.target.parentElement
        list.removeChild(li)
    }
})

// forms 
// instead of using a querySelector we can use document.forms to query the dom tree for forms such as
// document.forms -> html collection
// document.forms[0] -> form tag with id of search books 
// document.forms['add-book'] -> form with id of add-book


//add book
const addBook = document.forms['add-book']
addBook.addEventListener('submit', (e) => {
    e.preventDefault()
    const value = addBook.querySelector('input[type="text"]').value

    // creating elements for adding book

    const li = document.createElement('li')
    const name = document.createElement('span')
    const deleteBtn = document.createElement('span')

    // add content to new elements
    deleteBtn.textContent = 'delete'
    name.textContent = value

    //adding classes
    name.classList.add('name')
    deleteBtn.classList.add('delete')

    // appending elements to eachother and dom 
    //order does matter
    li.appendChild(name)
    li.appendChild(deleteBtn)
    list.appendChild(li)

})