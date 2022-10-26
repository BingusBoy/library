import { Book } from "./book.js";
//Library program for education by Wyatt Morris
/*let library = [];
const libraryListDisplay = document.querySelector(".libraryList");
const newButton = document.querySelector(".new");
const titleInput = document.querySelector(".title");
const authorInput = document.querySelector(".author");
const pagesInput = document.querySelector(".pages");
const readInput = document.querySelector(".read");*/
//import Book

class Library {
  constructor() {
    this.library = [];
    this.libraryDisplay = document.querySelector(".libraryList");
    this.newButton = document.querySelector(".new");
    this.titleInput = document.querySelector(".title");
    this.authorInput = document.querySelector(".author");
    this.pagesInput = document.querySelector(".pages");
    this.readInput = document.querySelector(".read");
  }
  clearLibraryDisplay() {
    while (this.libraryDisplay.firstChild) {
      this.libraryDisplay.removeChild(this.libraryDisplay.lastChild);
    }
  }

  getLibraryLength(x) {
    return this.library.length;
  }

  getLibraryTitlesAndIndex() {
    let output = [];
    for (let index = 0; index < this.library.length; index++) {
      const book = this.library[index];
      output.push(new getTitleIndex(book.title, index));
    }
    return output;
  }
  addBookToLibrary(title, author, pages, read) {
    this.library.push(new Book(title, author, pages, read));
  }
  removeBookFromLibrary(index) {
    this.library.splice(index, 1);
  }
  editBookInLibrary(title, author, pages, read, index) {
    let checks = [title, author, pages, read];
    if (checks[0] == "") {
      title = this.library[index].title;
    }
    if (checks[1] == "") {
      author = this.library[index].author;
    }
    if (checks[2].length == 0) {
      pages = this.library[index].pages;
    }
    if (checks[3].length == 0) {
      read = this.library[index].read;
    }

    this.library.splice(index, 1, new Book(title, author, pages, read));
  }

  updateLibraryDisplay() {
    this.clearLibraryDisplay();
    let entry;
    let deleteButton;
    let editButton;
    for (let i = 0; i < this.library.length; i++) {
      entry = document.createElement("li");
      deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      editButton = document.createElement("button");
      editButton.textContent = "Edit";
      deleteButton.addEventListener("click", () => {
        this.removeBookFromLibrary(i);
        this.updateLibraryDisplay();
      });

      editButton.addEventListener("click", () => {
        this.editBookInLibrary(
          this.titleInput.value,
          this.authorInput.value,
          this.pagesInput.value,
          this.readInput.value,
          i
        );
        this.updateLibraryDisplay();
      });

      entry.textContent = this.library[i].info();
      this.libraryDisplay.appendChild(entry);
      this.libraryDisplay.appendChild(deleteButton);
      this.libraryDisplay.appendChild(editButton);
    }
  }
  initialize() {
    this.newButton.addEventListener("click", () => {
      this.addBookToLibrary(
        this.titleInput.value,
        this.authorInput.value,
        this.pagesInput.value,
        this.readInput.value
      );
      this.clearLibraryDisplay();
      this.updateLibraryDisplay();
    });
  }
}

/* function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    let readM = ""
    if (read == 0) {
      readM = "not read yet.";
    } else if(pages == read){
      readM = "done reading!"
    } else {
      readM = `${read} pages read.`;
    }
    return(`${title} by ${author}, ${pages} pages, ${readM}`);
  };
} */
//information getters
/*function getTitleIndex(title, index) {
  this.title = title;
  this.index = index;
}

function getLibraryLength(x) {
  return library.length;
}

function getLibraryTitlesAndIndex() {
  let output = [];
  for (let index = 0; index < library.length; index++) {
    const book = library[index];
    output.push(new getTitleIndex(book.title, index));
  }
  return output;
}

// function fullLibraryInfo(){
//   output = []
//   library.forEach(book => output.push(book.info()))
//   return output.join("\n")
// }

//book management
function addBookToLibrary(title, author, pages, read) {
  library.push(new Book(title, author, pages, read));
}

function removeBookFromLibrary(index) {
  library.splice(index, 1);
}
function editBookInLibrary(title, author, pages, read, index) {
  let checks = [title, author, pages, read];
  if (checks[0] == "") {
    title = library[index].title;
  }
  if (checks[1] == "") {
    author = library[index].author;
  }
  if (checks[2].length == 0) {
    pages = library[index].pages;
  }
  if (checks[3].length == 0) {
    read = library[index].read;
  }

  library.splice(index, 1, new Book(title, author, pages, read));
}

//display
function updateLibraryDisplay() {
  clearLibraryDisplay();
  let entry;
  let deleteButton;
  for (let i = 0; i < library.length; i++) {
    entry = document.createElement("li");
    deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    editButton = document.createElement("button");
      editButton.textContent = "Edit";
    deleteButton.addEventListener("click", () => {
      removeBookFromLibrary(i);
      updateLibraryDisplay();
    });

    editButton.addEventListener("click", () => {
      editBookInLibrary(
        titleInput.value,
        authorInput.value,
        pagesInput.value,
        readInput.value,
        i
      );
      updateLibraryDisplay();
    });

    entry.textContent = library[i].info();
    libraryListDisplay.appendChild(entry);
    libraryListDisplay.appendChild(deleteButton);
    libraryListDisplay.appendChild(editButton);
  }
}
newButton.addEventListener("click", () => {
  addBookToLibrary(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readInput.value
  );
  updateLibraryDisplay();
});
//start
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, 0);
addBookToLibrary("The Adventures of Tom Sawyer", "Mark Twain", 274, 152);
addBookToLibrary("Das Kapital", "Karl Marx", 1134, 534);
addBookToLibrary("Diary of a Wimpy Kid", "Jeff Kinney", 221, 0);
updateLibraryDisplay();*/
let library = new Library();
library.initialize();
console.log(library);
