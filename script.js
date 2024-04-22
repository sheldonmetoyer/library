const myLibrary = [];
const addBookBtn = document.querySelector('.add-book');
const libraryShelf = document.querySelector('.library-shelf');
const dialog = document.querySelector('dialog');
const submitBtn = document.querySelector(".submit");
const form = document.querySelector('form');
const read = document.querySelector('#read');

function Book(title, author, num_pages, isRead) {
    this.title = title;
    this.author = author;
    this.num_pages = num_pages;
    this.isRead = isRead;
}

const first_book = new Book("Tale of Two Cities", "Charles Dickens", 293, true);
const second_book = new Book("Animal Farms", "George Orwell", 303, false);

myLibrary.push(first_book, second_book); 



function addBookToLibrary() {
    event.preventDefault();

    const newBook = new Book (form.bookTitle.value, form.bookAuthor.value, form.num_pages.value, form.isRead.checked);

    
    myLibrary.push(newBook);
    dialog.close();

    displayLibrary();
}


function displayLibrary() {

    libraryShelf.innerHTML = '';
  
    myLibrary.forEach( (item, index) => {

        const newestdiv = document.createElement('div');
        const readDiv = document.createElement('div');
        for (const prop in item) {
            const newPara = document.createElement('p');
            if(prop === "title") {
                newPara.textContent = `Title: ${item[prop]}`;
            } else if (prop === "author") {
                newPara.textContent = `Author: ${item[prop]}`;
            } else if (prop === "num_pages") {
                newPara.textContent = `Number of Pages: ${item[prop]}`;
            } else if (item[prop] === true) {
                readDiv.classList.add('read')
                readDiv.addEventListener('click', toggleRead);
            } else if (item[prop] === false) {
                readDiv.classList.add('not-read')
                readDiv.addEventListener('click', toggleRead);
            }
            
            newestdiv.appendChild(newPara);
            newestdiv.appendChild(readDiv);
            
        }

        addDeleteBtn(newestdiv);

        newestdiv.classList.add("card");
        newestdiv.dataset.number = index;
        libraryShelf.appendChild(newestdiv);

    });
}

function addDeleteBtn(bookCard) {
    const createDeleteBtn = document.createElement('button');

    createDeleteBtn.classList.add("deleteBtn")

    createDeleteBtn.textContent = "Delete";

    createDeleteBtn.addEventListener('click', () => {
        myLibrary.splice(bookCard.dataset.number, 1);

        displayLibrary();
    })

    bookCard.appendChild(createDeleteBtn);
}

function toggleRead(event) {
    const clickedBookCard = event.currentTarget.parentElement;
    const bookIndex = clickedBookCard.dataset.number;
    const book = myLibrary[bookIndex];

    console.log(event);
    console.log(clickedBookCard);

    book.isRead = !book.isRead;

    displayLibrary();
    
}



displayLibrary();


submitBtn.addEventListener('click', addBookToLibrary);

addBookBtn.addEventListener('click', () => {
    dialog.showModal();
});