class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
      this.status = "available";
    }

    getStatus() {
      return this.status;
    }

    borrowBook() {
      if (this.status === "available") {
        this.status = "borrowed";
        return true;
      } else {
        return false;
      }
    }
  }

  class FictionBook extends Book {
    constructor(title, author, genre) {
      super(title, author);
      this.genre = genre;
    }

    getGenre() {
      return this.genre;
    }
  }

  class NonFictionBook extends Book {
    constructor(title, author, subject) {
      super(title, author);
      this.subject = subject;
    }

    getSubject() {
      return this.subject;
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

    getBooksByTopic(topic) {
      return this.catalogData.get(topic) || [];
    }
  }

  class Library {
    constructor() {
      this.catalog = new Catalog();
    }

    addBookToCatalog(topic, book) {
      this.catalog.addBook(topic, book);
    }

    displayBooksByTopic(topic) {
      const books = this.catalog.getBooksByTopic(topic);
      console.log(`Books in the ${topic} category:`);
      books.forEach(book => {
        console.log(`${book.title} by ${book.author}`);

        if (book instanceof FictionBook) {
          console.log(`   Genre: ${book.getGenre()}`);
        } else if (book instanceof NonFictionBook) {
          console.log(`   Subject: ${book.getSubject()}`);
        }

        console.log(`   Status: ${book.getStatus()}`);
      });
    }

    borrowBook(title) {
      for (const books of this.catalog.catalogData.values()) {
        for (const book of books) {
          if (book.title === title) {
            if (book.borrowBook()) {
              console.log(`Successfully borrowed: ${title}`);
              return book;
            } else {
              console.log(`Book "${title}" is not available for borrowing.`);
              return null;
            }
          }
        }
      }

      console.log(`Book with title "${title}" not found.`);
      return null;
    }
  }


  const library = new Library();

  const fictionBook = new FictionBook("The Great Gatsby", "F. Scott Fitzgerald", "Classic");
  const nonFictionBook = new NonFictionBook("Sapiens", "Yuval Noah Harari", "History");

  library.addBookToCatalog("Fiction", fictionBook);
  library.addBookToCatalog("Non-Fiction", nonFictionBook);

  library.displayBooksByTopic("Fiction");

  const borrowedBook = library.borrowBook("The Great Gatsby");
  if (borrowedBook) {
    library.displayBooksByTopic("Fiction");
  }
