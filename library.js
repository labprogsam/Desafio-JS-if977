class Book {
    constructor(id, title, description, author) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.author = author;
    }
  }

class Library {
    constructor() {
        this.books = [];
    }

    addBook(id, description, title, author) {
        const book = this.books.find((item) => item.id == id)
        if (book) {
            console.log("Try other id.")
            return
        }
        const newBook = new Book(id, title, description, author);
        this.books.push(newBook);

        console.log("New book created!")

        return newBook
    }

    getBookById(id) {
        const book = this.books.find((item) => item.id == id)
        return book || "Book not found!"
    }

    getBooks() {
        console.log("These are all the registered books:",this.books)
        return this.books
    }

    removeBookById(id) {
        const newArr = this.books.filter((item) => item.id != id)
        this.books = newArr
        console.log("Item with id=" + id + "removed!")
    }

    updateBookById(id, description, title, author) {
        const index = this.books.findIndex(obj => obj.id == id);
        if (index == -1) {
            console.log("Item not found!")
            return
        }
        const current = this.books[index];
        const newBook = new Book(id,
            description || current.description,
            title || current.title,
            author || current.author);
        this.books[index] = newBook

        console.log("Item with id=" + id + "updated!")
        return newBook
    }
}