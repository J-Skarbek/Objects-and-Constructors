const submitBtn = document.getElementById('submit-btn');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const testButton = document.getElementById('test-button');

const displayTable = document.getElementById('books-table')
const tableRow = document.createElement('tr');

submitBtn.addEventListener('click', addBookToLibrary);
testButton.addEventListener('click', displayBooks);

const myLibrary = [];

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
  bookTitle.value = ''
  bookAuthor.value = ''
  bookPages.value = ''
}

function displayBooks() {
  myLibrary.forEach(book => {
    alert(`${book.title}, ${book.author}, ${book.pageCount}, ${book.haveRead}`);
    let newRow = displayTable.appendChild(tableRow).innerHTML = 
      `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.pageCount}</td><td>${book.haveRead}</td></tr>`;
    console.log(newRow);
    return newRow;
    // newRow.innerHTML
  });
}