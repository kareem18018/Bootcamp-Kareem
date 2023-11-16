class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
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
      });
    }
  }


  const library = new Library();

  const fictionBook = new FictionBook("The Great Gatsby", "F. Scott Fitzgerald", "Classic");
  const nonFictionBook = new NonFictionBook("Sapiens", "Yuval Noah Harari", "History");

  library.addBookToCatalog("Fiction", fictionBook);
  library.addBookToCatalog("Non-Fiction", nonFictionBook);

  library.displayBooksByTopic("Fiction");
  library.displayBooksByTopic("Non-Fiction");
