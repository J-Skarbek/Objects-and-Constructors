const submitBtn = document.getElementById('submit-btn');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const haveRead = document.getElementById('have-read');
const testButton = document.getElementById('test-button');

const displayTable = document.getElementById('books-table');

const tableRow = document.createElement('tr')
const newRow = displayTable.appendChild(tableRow)

let indexNum = 0

let testNumb

const myLibrary = [];

submitBtn.addEventListener('click', addBookToLibrary);

function Book(title, author, pageCount, readStatus) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.readStatus = readStatus;
  this.readStatusOutput = function() {
    return (this.readStatus === true ? `I have read ${this.title}.` : `I have not read ${this.title}.`)
  };
}

function addBookToLibrary() {
  const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, haveRead.checked)
  myLibrary.push(newBook)
  displayBooks(newBook) 
  bookTitle.value = ''
  bookAuthor.value = ''
  bookPages.value = ''
  haveRead.checked = false
}

function displayBooks(newBook) {
  if (myLibrary.length === 1) {
    for (let i = 0; i < myLibrary.length; i++) {
      const tableRow = document.createElement('tr')
      const newRow = displayTable.appendChild(tableRow)
      newRow.setAttribute('id', `index-${indexNum}`);
      newRow.innerHTML = 
        `<td>${newBook.title}</td><td>${newBook.author}</td><td>${newBook.pageCount}</td><td>${newBook.readStatusOutput()}</td><td><button class="remove-btn-${indexNum}">Remove</button></td>`;
      console.log(i)
      const removalBtn = document.querySelector(`.remove-btn-${indexNum}`)
      const testRowItem = document.getElementById(`index-${indexNum}`)
      removalBtn.addEventListener('click', () => {
        displayTable.removeChild(testRowItem)
      })
      newRow.dataset.index = indexNum++;
    }
  } else {
    for (let i = myLibrary.length; i == myLibrary.length; i++) {
      const tableRow = document.createElement('tr')
      const newRow = displayTable.appendChild(tableRow)
      newRow.setAttribute('id', `index-${indexNum}`);
      newRow.innerHTML = 
        `<td>${newBook.title}</td><td>${newBook.author}</td><td>${newBook.pageCount}</td><td>${newBook.readStatusOutput()}</td><td><button class="remove-btn-${indexNum}">Remove</button></td>`;
      console.log(i)
      const removalBtn = document.querySelector(`.remove-btn-${indexNum}`)
      const testRowItem = document.getElementById(`index-${indexNum}`)
      removalBtn.addEventListener('click', () => {
        displayTable.removeChild(testRowItem)
      })
      newRow.dataset.index = indexNum++;
    }
  }
}
