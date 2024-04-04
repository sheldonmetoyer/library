const myLibrary = [];
const addBookBtn = document.querySelector('.add-book');
const libraryShelf = document.querySelector('.library-shelf');
const dialog = document.querySelector('dialog');
const dialogButton = document.querySelector(".show-dialog");
const hideDialog = document.querySelector(".hide-dialog");
const submitBtn = document.querySelector(".submit");

dialogButton.addEventListener('click', () => {
    dialog.showModal();
})

hideDialog.addEventListener('click', () => {
    dialog.close();
})

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
  
    myLibrary.forEach( (item, index) => {

        const newestdiv = document.createElement('div');
        for (const prop in item) {
            const newPara = document.createElement('p');
            // newPara.textContent = prop + ": " + item[prop];
            if(prop === "title") {
                newPara.textContent = `Title: ${item[prop]}`;
            } else if (prop === "author") {
                newPara.textContent = `Author: ${item[prop]}`;
            } else if (prop === "num_pages") {
                newPara.textContent = `Number of Pages: ${item[prop]}`;
            } else newPara.textContent = `Read: ${item[prop]}`;
            newestdiv.appendChild(newPara);
        }

        newestdiv.classList.add("card");
        libraryShelf.appendChild(newestdiv);

        //this is the first way I did it. looping seems to be the more professional way to do it

        // const newDiv = document.createElement('div');
        // const titlePara = document.createElement('p')
        // const authorPara = document.createElement('p')
        // const pagesPara = document.createElement('p')
        // const isReadPara = document.createElement('p')
        
        // titlePara.textContent = `Title: ${item.title}`;
        // authorPara.textContent = `Author: ${item.author}`;
        // pagesPara.textContent = `Number of pages: ${item.num_pages}`;
        // isReadPara.textContent = `Read: ${item.isRead}`;

        // newDiv.appendChild(titlePara);
        // newDiv.appendChild(authorPara);
        // newDiv.appendChild(pagesPara);
        // newDiv.appendChild(isReadPara);

        // newDiv.classList.add('card');

        // libraryShelf.appendChild(newDiv);
    });
}

displayLibrary();

function myFunc() {
    console.log("Event Prevented");
    event.preventDefault();
}




       




submitBtn.addEventListener('click', myFunc);

addBookBtn.addEventListener('click', addBookToLibrary);





