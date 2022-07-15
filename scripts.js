const submitBtn = document.getElementById('submit-btn');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const haveRead = document.getElementById('have-read');
const testButton = document.getElementById('test-button');

const displayTable = document.getElementById('books-table');

const myLibrary = [];

submitBtn.addEventListener('click', addBookToLibrary);

function addRemoveBtnListener() {
  const removeButtons = Array.from(document.getElementsByClassName('remove-btn'));
  removeButtons.forEach(button => {
    button.addEventListener('click', () => {
      // displayTable.removeChild('tr')
      console.log('test')
    })
  })
}

function Book(title, author, pageCount, readStatus) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.readStatus = readStatus;
  this.readStatusOutput = function() {
    return (this.readStatus === true ? `I have read ${this.title}.` : `I have not read ${this.title}.`)
  };
}

// function removeBookFromLibrary() {
//   console.log('test')
//   displayTable.removeChild()
// }

function addBookToLibrary() {
  let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, haveRead.checked)
  myLibrary.push(newBook)
  displayBook(newBook)
  addRemoveBtnListener()
  bookTitle.value = ''
  bookAuthor.value = ''
  bookPages.value = ''
  haveRead.checked = false
}

function displayBook(newBook) {
  const tableRow = document.createElement('tr')
  const newRow = displayTable.appendChild(tableRow)
  newRow.innerHTML = 
    `<td>${newBook.title}</td><td>${newBook.author}</td><td>${newBook.pageCount}</td><td>${newBook.readStatusOutput()}</td><td><button class="remove-btn">Remove</button></td>`
}
