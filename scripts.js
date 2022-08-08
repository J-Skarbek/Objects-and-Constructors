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

function Book(title, author, pageCount, readStatus, indexNum) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.readStatus = readStatus;
  this.bookReferenceNumber = indexNum;
  this.readStatusOutput = function() {
    return (this.readStatus === true ? `I have read ${this.title}.` : `I have not read ${this.title}.`)
  };
}

function addBookToLibrary() {
  const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, haveRead.checked, indexNum)
  myLibrary.push(newBook)
  handleBookDisplay(newBook)
  let tempBookReference = bookTitle.value 
  bookTitle.value = ''
  bookAuthor.value = ''
  bookPages.value = ''
  haveRead.checked = false
  console.log(tempBookReference)
}

function bookRemovalOperatives(newBook) {
  const removalBtn = document.querySelector(`.remove-btn-${indexNum}`)
  const removeRow = document.getElementById(`index-${indexNum}`)
  removalBtn.addEventListener('click', () => {
    displayTable.removeChild(removeRow)
    resetDomIndexCounter()
      let test = removeRow.dataset.index
      myLibrary.splice(`${test}`, 1)
      console.log(`This is the test value: ${test}.`)
  })
}

function createNewTableRow(newBook) {
  const tableRow = document.createElement('tr')
    const newRow = displayTable.appendChild(tableRow)
    newRow.setAttribute('id', `index-${indexNum}`)
    newRow.setAttribute('class', 'books-in-dom')
    newRow.innerHTML = 
      `<td>${newBook.title}</td><td>${newBook.author}</td><td>${newBook.pageCount}</td><td>${newBook.readStatusOutput()}</td><td><button class="remove-btn-${indexNum}">Remove</button></td>`;
    bookRemovalOperatives(newBook)
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

// myLibarary.forEach(bookElement => {
  
// });

// get the dom reference 

// run function to test each item in array to see if dom-reference number matches the array index value

// if true -> remove/slice/pop that item from the array

// run a loop through existing dom customElements, and for each one then re-assign the indexNum value

function resetDomIndexCounter() {
  indexNum = 0;
  let domElementsValues = Array.from(document.getElementsByClassName('books-in-dom'))
    domElementsValues.forEach(domElement => {
      domElement.dataset.index = indexNum++
  })
}
