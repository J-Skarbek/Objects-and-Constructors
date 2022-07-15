const submitBtn = document.getElementById('submit-btn');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const testButton = document.getElementById('test-button');

const displayTable = document.getElementById('books-table')

const myLibrary = [];

submitBtn.addEventListener('click', addBookToLibrary);
testButton.addEventListener('click', displayBooks);


function Book(title, author, pageCount, haveRead) {
  this.title = title
  this.author = author
  this.pageCount = pageCount
  this.haveRead = haveRead
  this.displayInfo = () => {
    return `${title} by ${author}, ${pageCount} pages. ${haveRead}.`;
  }
}

function addBookToLibrary() {
  let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, 'I have read');
  myLibrary.push(newBook);
  displayBook(newBook);
  bookTitle.value = ''
  bookAuthor.value = ''
  bookPages.value = ''
}

function displayBook(newBook) {
  const tableRow = document.createElement('tr');
  const newRow = displayTable.appendChild(tableRow);
  newRow.innerHTML = 
    `<tr><td>${newBook.title}</td><td>${newBook.author}</td><td>${newBook.pageCount}</td><td>${newBook.haveRead}</td></tr>`;
}





// function displayBooks() {
//   myLibrary.forEach(book => {
//      const tableRow = document.createElement('tr');
//     const newRow = displayTable.appendChild(tableRow);
//     newRow.innerHTML = 
//       `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.pageCount}</td><td>${book.haveRead}</td></tr>`;
//     console.log(newRow);
//   });
// }
