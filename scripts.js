const form = document.querySelector('.book-input-form');
const pagesError = document.querySelector('span.pagesError');
const submitBtn = document.getElementById('submit-btn');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const haveRead = document.getElementById('have-read');
const testButton = document.getElementById('test-button');

const displayTable = document.getElementById('books-table');

let indexNum = 0

const myLibrary = [];

submitBtn.addEventListener('click', addBookToLibrary);

class Book {
  constructor(title, author, pageCount, readStatus) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
    this.readStatusOutput = function() {
        return (this.readStatus === true ? `I have read ${this.title}.` : `I have not read ${this.title}.`)
    };
  }
}

function addBookToLibrary(e) {
  if ((!bookPages.validity.valid) || (!bookAuthor.validity.valid) || (!bookTitle.validity.valid)) {
    showError();
    e.preventDefault();
    console.log(bookPages.validity);
  } else {
    const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, haveRead.checked)
    myLibrary.push(newBook)
    handleBookDisplay(newBook)
    bookTitle.value = ''
    bookAuthor.value = ''
    bookPages.value = ''
    haveRead.checked = false
  }
}

function bookRemovalOperatives() {
  const removalBtn = document.querySelector(`.remove-btn-${indexNum}`)
  const removeRow = document.getElementById(`index-${indexNum}`)
  removalBtn.addEventListener('click', () => {
    displayTable.removeChild(removeRow)
    myLibrary.splice(`${removeRow.dataset.index}`, 1)
    resetDomIndexCounter()
  })
}

function resetDomIndexCounter() {
  indexNum = 0;
  let domElementsValues = Array.from(document.getElementsByClassName('books-in-dom'))
    domElementsValues.forEach(domElement => {
      domElement.dataset.index = indexNum++
  })
}

function createNewTableRow(newBook) {
  const tableRow = document.createElement('tr')
    const newRow = displayTable.appendChild(tableRow)
    newRow.setAttribute('id', `index-${indexNum}`)
    newRow.setAttribute('class', 'books-in-dom')
    newRow.innerHTML = 
      `<td>${newBook.title}</td><td>${newBook.author}</td><td>${newBook.pageCount}</td><td>${newBook.readStatusOutput()}</td><!--<button type="button" name="Updated_Read_Status" id="update-status">I have read ${newBook.title}</button>--><td><button class="remove-btn-${indexNum}">Remove</button></td>`;
    bookRemovalOperatives(newBook)
    // updateReadStatus(newBook)
    newRow.dataset.index = indexNum++
}

function handleBookDisplay(newBook) {
  if (myLibrary.length === 1) {
    for (let i = 0; i < myLibrary.length; i++) {
      createNewTableRow(newBook)
    }
  } else {
    for (let i = myLibrary.length; i === myLibrary.length; i++) {
      createNewTableRow(newBook)
    }
  }
}

// Form validations

function showError() {

  // const inputErrors = {
  //   pagesMissing:'You need to enter the number of pages in the book.',
  //   pagesRangeError:'The number of pages should be between 1 and 20,000.',
  //   authorMissing: "You forgot to enter the author's name.",
  //   authorInvalid: 'This field should be between 1 and 150 characters long.',
  //   titleMissing: "You forgot to enter the book's title.",
  //   titleInvalid: 'This field should be between 1 and 150 characters long.',
  // };

  // console.table(inputErrors)

  if (bookPages.validity.valueMissing) {
    pagesError.textContent = 'You need to enter the number of pages in the book.';
  } else if (!bookPages.validity.valid) {
    pagesError.textContent = 'The number of pages should be between 1 and 20,000.';
  }

  if (bookAuthor.validity.valueMissing) {
    pagesError.textContent = "You forgot to enter the author's name.";
  } else if (!bookAuthor.validity.valid) {
    pagesError.textContent = 'This field should be between 1 and 150 characters long.';
  }

  if (bookTitle.validity.valueMissing) {
    pagesError.textContent = "You forgot to enter the book's title.";
  } else if (!bookTitle.validity.valid) {
    pagesError.textContent = 'This field should be between 1 and 150 characters long.';
  }
}