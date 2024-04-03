const myLibrary = [];
const addBookBtn = document.querySelector('.add-book');
const libraryShelf = document.querySelector('.library-shelf');

function Book(title, author, num_pages, isRead) {
    this.title = title;
    this.author = author;
    this.num_pages = num_pages;
    this.isRead = isRead;
}

const first_book = new Book("Tale of Two Cities", "Charles Dickens", 293, "Yes");
const second_book = new Book("Animal Farms", "George Orwell", 303, "No");

myLibrary.push(first_book); 
myLibrary.push(second_book);


function addBookToLibrary() {
    let bookTitle = prompt("What is the title of the book?");
    let bookAuthor = prompt("Who is the author of the book?");
    let num_pages = prompt("How many pages are in the book?");
    let isRead = prompt("Have you read the book");

    const newBook = new Book(bookTitle, bookAuthor, num_pages, isRead);

    myLibrary.push(newBook);

    displayLibrary();
}

function displayLibrary() {

    libraryShelf.innerHTML = '';
  
    myLibrary.forEach( (item) => {
        const newDiv = document.createElement('div');
        const titlePara = document.createElement('p')
        const authorPara = document.createElement('p')
        const pagesPara = document.createElement('p')
        const isReadPara = document.createElement('p')
        
        titlePara.textContent = `Title: ${item.title}`;
        authorPara.textContent = `Author: ${item.author}`;
        pagesPara.textContent = `Number of pages: ${item.num_pages}`;
        isReadPara.textContent = `Read: ${item.isRead}`;

        newDiv.appendChild(titlePara);
        newDiv.appendChild(authorPara);
        newDiv.appendChild(pagesPara);
        newDiv.appendChild(isReadPara);


        newDiv.classList.add('card');


        libraryShelf.appendChild(newDiv);


       
    });
}

displayLibrary();






       






addBookBtn.addEventListener('click', addBookToLibrary);





