import { Book } from "./book.js";
//Library program for education by Wyatt Morris

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

let library = new Library();
library.initialize();
console.log(library);
