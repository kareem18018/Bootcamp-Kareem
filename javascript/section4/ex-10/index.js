

const Logger = {
    log(message) {
      console.log(`[LOG] ${message}`);
    }
  };

  class Book {
    constructor(title, author, publicationDate) {
      this.title = title;
      this.author = author;
      this.publicationDate = publicationDate;
      this.status = "available";

      this.log(`New book created - Title: ${this.title}, Author: ${this.author}, Publication Date: ${this.publicationDate}`);
    }

    log(message) {
      Logger.log(message);
    }

    borrowBook(borrower) {
      if (this.status === "available") {
        this.status = "borrowed";
        this.log(`Book borrowed - Title: ${this.title}, Borrower: ${borrower}`);
        return true; // Book is successfully borrowed
      } else {
        this.log(`Book "${this.title}" not available for borrowing.`);
        return false; // Book is not available for borrowing
      }
    }
  }

  class Library {
    constructor() {
      this.catalog = new Catalog();

      Object.assign(this, Logger);
    }

    addBookToCatalog(topic, book) {
      this.catalog.addBook(topic, book);

      this.log(`Book added to catalog - Title: ${book.title}, Topic: ${topic}`);
    }

    borrowBook(title, borrower) {
      const book = this.catalog.findBookByTitle(title);

      if (book && book.borrowBook(borrower)) {
        return book;
      } else {
        return null;
      }
    }

    log(message) {
      Logger.log(message);
    }
  }

  class Catalog {
    constructor() {
      this.catalogData = new Map();
    }

    addBook(topic, book) {
      if (!this.catalogData.has(topic)) {
        this.catalogData.set(topic, []);
      }
      this.catalogData.get(topic).push(book);
    }

    findBookByTitle(title) {
      for (const books of this.catalogData.values()) {
        for (const book of books) {
          if (book.title === title) {
            return book;
          }
        }
      }
      return null; // Book not found
    }
  }

  const library = new Library();

  const fictionBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", "1925-04-10");
  const nonFictionBook = new Book("Sapiens", "Yuval Noah Harari", "2011-02-10");

  library.addBookToCatalog("Fiction", fictionBook);
  library.addBookToCatalog("Non-Fiction", nonFictionBook);

  const borrowedBook = library.borrowBook("The Great Gatsby", "John Doe");
