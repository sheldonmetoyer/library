const myLibrary = [];
const addBookBtn = document.querySelector('.add-book');
const libraryShelf = document.querySelector('.library-shelf');

function Book(title, author, num_pages, isRead) {
    this.title = title;
    this.author = author;
    this.num_pages = num_pages;
    this.isRead = isRead;
}

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
    newDiv = document.createElement('div');
    titlePara = document.createElement('p')
    authorPara = document.createElement('p')
    pagesPara = document.createElement('p')
    isReadPara = document.createElement('p')




    myLibrary.forEach( (item) => {
        libraryShelf.appendChild(newDiv);
        newDiv.appendChild(titlePara);
        newDiv.appendChild(authorPara);
        newDiv.appendChild(pagesPara);
        newDiv.appendChild(isReadPara);
        titlePara.textContent = item.title;
        authorPara.textContent = item.author;
        pagesPara.textContent = item.num_pages;
        isReadPara.textContent = item.isRead;
        
    });
}

       
        // authorPara.textContent = item.author;
        
        // pagesPara.textContent = item.num_pages;
        // isReadPara.textContent = item.isRead;






addBookBtn.addEventListener('click', addBookToLibrary);




