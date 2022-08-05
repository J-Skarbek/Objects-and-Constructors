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

function addRemoveBtnListener() {
  const removeButtons = Array.from(document.getElementsByClassName('remove-btn'));
  removeButtons.forEach(button => {
    button.addEventListener('click', () => {
      removeBook()
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

function addBookToLibrary() {
  const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, haveRead.checked)
  myLibrary.push(newBook)
  displayBooks(newBook) 
  addRemoveBtnListener()
  bookTitle.value = ''
  bookAuthor.value = ''
  bookPages.value = ''
  haveRead.checked = false
}

// function removeBook() {
//   const bookRow = document.
//   const bookRows = Array.from(document.querySelectorAll('[data-index]'))
//   bookRows.forEach(element => {
    
//   });

//   myLibrary.forEach(function(element, index) { 
//     if (index >= 0) {
//       console.log('success')
//       let indexValue = index
//       if (indexValue === dataset.index)
//     } else {
//       console.log('whatever')
//     }
//   })

//   console.log(getRow)
//   console.log(removeBookNumber)
//      // myLibrary.pop(newBook)
//     // console.log('test removal')

// }

function displayBooks(newBook) {
  if (myLibrary.length === 1) {
    for (let i = 0; i < myLibrary.length; i++) {
      const tableRow = document.createElement('tr')
      const newRow = displayTable.appendChild(tableRow)
      newRow.setAttribute('id', `index-${indexNum}`);
      newRow.innerHTML = 
        `<td>${newBook.title}</td><td>${newBook.author}</td><td>${newBook.pageCount}</td><td>${newBook.readStatusOutput()}</td><td><button class="remove-btn-${indexNum}">Remove</button></td>`;
        console.log(i)
      }
  } else {
  for (let i = myLibrary.length; i == myLibrary.length; i++) {
    const tableRow = document.createElement('tr')
    const newRow = displayTable.appendChild(tableRow)
    newRow.setAttribute('id', `index-${indexNum}`);
    newRow.innerHTML = 
      `<td>${newBook.title}</td><td>${newBook.author}</td><td>${newBook.pageCount}</td><td>${newBook.readStatusOutput()}</td><td><button class="remove-btn-${indexNum}">Remove</button></td>`;
      console.log(i)
    }
  }
}

// function displayBook(newBook) {
//   const tableRow = document.createElement('tr')
//   const newRow = displayTable.appendChild(tableRow)
//   // newRow.setAttribute('id', indexNum);
//   newRow.setAttribute('id', `index-${indexNum}`);
//   // newRow.dataset.index = indexNum++;
//   newRow.innerHTML = 
//     `<td>${newBook.title}</td><td>${newBook.author}</td><td>${newBook.pageCount}</td><td>${newBook.readStatusOutput()}</td><td><button class="remove-btn-${indexNum}">Remove</button></td>`;
//   newRow.dataset.index = indexNum++;
// }
