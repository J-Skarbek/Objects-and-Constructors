const submitBtn = document.getElementById('submit-btn');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const haveRead = document.getElementById('have-read');
const testButton = document.getElementById('test-button');

const displayTable = document.getElementById('books-table');

const myLibrary = [];

submitBtn.addEventListener('click', addBookToLibrary);

function Book(title, author, pageCount, readStatus) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.readStatus = readStatus;
  this.readStatusOutput = function() {
    if (this.readStatus === true) {
      return `I have read ${this.title}.`
    } else {
      return `I have not read ${this.title}.`
    }
  };
}

function addBookToLibrary() {
  let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, haveRead.checked)
  myLibrary.push(newBook)
  displayBook(newBook)
  bookTitle.value = ''
  bookAuthor.value = ''
  bookPages.value = ''
  haveRead.checked = false
}

function displayBook(newBook) {
  const tableRow = document.createElement('tr')
  const newRow = displayTable.appendChild(tableRow)
  newRow.innerHTML = 
    `<tr><td>${newBook.title}</td><td>${newBook.author}</td><td>${newBook.pageCount}</td><td>${newBook.readStatusOutput()}</td><td><button>Remove</button></td></tr>`
}
