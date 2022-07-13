const submitBtn = document.getElementById('submit-btn');
let bookTitle = document.getElementById('title');
let bookAuthor = document.getElementById('author');
let bookPages = document.getElementById('pages');


submitBtn.addEventListener('click', addBookToLibrary);
// submitBtn.addEventListener('click', () => {
//   console.log(newBook);
// })

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
};