const submitBtn = document.getElementById('submit-btn');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const haveRead = document.getElementById('have-read');
const testButton = document.getElementById('test-button');

const displayTable = document.getElementById('books-table')

const myLibrary = [];

submitBtn.addEventListener('click', addBookToLibrary);

function Book(title, author, pageCount, haveRead) {
  this.title = title
  this.author = author
  this.pageCount = pageCount
  this.haveRead = () => {
    if (haveRead.checked) {
      return this.readStatus = `I've read ${this.title}.`
    } else {
       return this.readStatus = `I haven't read ${this.title}.`
    }
  }
  // this.displayInfo = () => {
  //   return `${title} by ${author}, ${pageCount} pages. ${readStatus}`;
  // }
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
    `<tr><td>${newBook.title}</td><td>${newBook.author}</td><td>${newBook.pageCount}</td><td>${newBook.readStatus}</td><td><button>Remove</button></td></tr>`;
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
