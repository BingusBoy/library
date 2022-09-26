let myLibrary = []
let librarySize = 0
const newBooks = document.querySelector("form")
const newBookButton = document.querySelector(".addNewBook")
let newBookDisplay = false
newBookButton.addEventListener("click", ()=>{
    // console.log(newBookButton)
    if (newBookDisplay === false){
        newBooks.style.display = "flex"
        newBookDisplay = true
    }else if(newBookDisplay = true){
        newBooks.style.display = "hidden"
        newBookDisplay = false
    }
    console.log(newBookDisplay)
    console.log(newBooks.style.display)
})
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.printTitle = function () {
    console.log(title);
  };
  this.info = function () {
    if (read == 0) {
      read = "not read yet";
    } else {
      read = `${read} pages read`;
    }
    console.log(`${title} by ${author}, ${pages}, ${read}`);
  };
}
function enterBook(){
    console.table(newBooks)
}
function addBook(){
}
const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", 0);
hobbit.info();