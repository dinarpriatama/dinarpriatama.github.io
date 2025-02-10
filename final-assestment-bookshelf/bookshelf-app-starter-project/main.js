// Selector elemen
const bookForm = document.getElementById("bookForm");
const searchBookForm = document.getElementById("searchBook");
const incompleteBookList = document.getElementById("incompleteBookList");
const completeBookList = document.getElementById("completeBookList");

// Array untuk menyimpan data buku
let books = [];

// Fungsi untuk menyimpan data ke localStorage
function saveBooksToStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}

// Fungsi untuk memuat data dari localStorage
function loadBooksFromStorage() {
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
}

// Fungsi untuk membuat elemen buku
function createBookElement({ id, title, author, year, isComplete }) {
  const bookItem = document.createElement("div");
  bookItem.classList.add("book-item");
  bookItem.setAttribute("data-bookid", id);
  bookItem.setAttribute("data-testid", "bookItem");

  const bookTitle = document.createElement("h3");
  bookTitle.textContent = title;
  bookTitle.setAttribute("data-testid", "bookItemTitle");

  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = `Penulis: ${author}`;
  bookAuthor.setAttribute("data-testid", "bookItemAuthor");

  const bookYear = document.createElement("p");
  bookYear.textContent = `Tahun: ${year}`;
  bookYear.setAttribute("data-testid", "bookItemYear");

  const buttonContainer = document.createElement("div");

  const toggleButton = document.createElement("button");
  toggleButton.textContent = isComplete ? "Belum selesai dibaca" : "Selesai dibaca";
  toggleButton.setAttribute("data-testid", "bookItemIsCompleteButton");
  toggleButton.addEventListener("click", () => toggleBookStatus(id));

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Hapus Buku";
  deleteButton.setAttribute("data-testid", "bookItemDeleteButton");
  deleteButton.addEventListener("click", () => deleteBook(id));

  const editButton = document.createElement("button");
  editButton.textContent = "Edit Buku";
  editButton.setAttribute("data-testid", "bookItemEditButton");
  editButton.addEventListener("click", () => editBook(id));

  buttonContainer.append(toggleButton, deleteButton, editButton);
  bookItem.append(bookTitle, bookAuthor, bookYear, buttonContainer);

  return bookItem;
}

// Fungsi untuk menampilkan buku di daftar
function renderBooks(filteredBooks = books) {
  incompleteBookList.innerHTML = "";
  completeBookList.innerHTML = "";

  filteredBooks.forEach((book) => {
    const bookElement = createBookElement(book);
    if (book.isComplete) {
      completeBookList.append(bookElement);
    } else {
      incompleteBookList.append(bookElement);
    }
  });
}

// Fungsi untuk menambahkan buku
function addBook(event) {
  event.preventDefault();
  const title = document.getElementById("bookFormTitle").value;
  const author = document.getElementById("bookFormAuthor").value;
  const year = Number(document.getElementById("bookFormYear").value);
  const isComplete = document.getElementById("bookFormIsComplete").checked;

  const editingBookId = bookForm.dataset.editingBookId;

  if (editingBookId) {
    const bookIndex = books.findIndex((book) => book.id === editingBookId);
    books[bookIndex] = {
      id: editingBookId,
      title,
      author,
      year,
      isComplete,
    };

    delete bookForm.dataset.editingBookId;
    document.getElementById("bookFormSubmit").textContent = "Masukkan Buku ke rak";
  } else {
    const newBook = {
      id: Date.now().toString(),
      title,
      author,
      year,
      isComplete,
    };

    books.push(newBook);
  }

  saveBooksToStorage();
  renderBooks();
  bookForm.reset();
}

// Fungsi untuk menghapus buku
function deleteBook(bookId) {
  books = books.filter((book) => book.id !== bookId);
  saveBooksToStorage();
  renderBooks();
}

// Fungsi untuk mengubah status buku
function toggleBookStatus(bookId) {
  const book = books.find((book) => book.id === bookId);
  if (book) {
    book.isComplete = !book.isComplete;
    saveBooksToStorage();
    renderBooks();
  }
}

// Fungsi untuk mengedit buku
function editBook(bookId) {
  const book = books.find((book) => book.id === bookId);
  if (book) {
    document.getElementById("bookFormTitle").value = book.title;
    document.getElementById("bookFormAuthor").value = book.author;
    document.getElementById("bookFormYear").value = book.year;
    document.getElementById("bookFormIsComplete").checked = book.isComplete;

    bookForm.dataset.editingBookId = bookId;

    const submitButton = document.getElementById("bookFormSubmit");
    submitButton.textContent = "Simpan Buku";
  }
}

// Fungsi untuk mencari buku
function searchBooks(event) {
  event.preventDefault();
  const searchTitle = document.getElementById("searchBookTitle").value.toLowerCase();
  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTitle));
  renderBooks(filteredBooks);
}

// Event Listener
bookForm.addEventListener("submit", addBook);
searchBookForm.addEventListener("submit", searchBooks);
window.addEventListener("DOMContentLoaded", () => {
  loadBooksFromStorage();
  renderBooks();
});
