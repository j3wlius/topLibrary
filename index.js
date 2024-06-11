const myLibrary = ["book1", "book2", "book3"];

function Book() {}

function addBookToLibrary() {}

const containerDiv = document.querySelector(".container");

function displayBooks(books) {
  // Add books to div
  const booksDiv = document.createElement("div");
  booksDiv.classList.add("books");
  books.forEach((book) => {
    const bookTitle = document.createElement("h3");
    bookTitle.textContent = book;
    booksDiv.appendChild(bookTitle);
  });

  containerDiv.appendChild(booksDiv);

  // Add button
  const button = document.createElement("button");
  button.textContent = "Add Book";
  button.classList.add("primary-btn", "btn");
  containerDiv.appendChild(button);
}

displayBooks(myLibrary);
