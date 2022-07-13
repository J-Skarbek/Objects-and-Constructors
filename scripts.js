const submitBtn = document.getElementById('submit-btn');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const testButton = document.getElementById('test-button');

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
    alert(this.title)
  });
}