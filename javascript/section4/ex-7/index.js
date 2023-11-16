class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
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
      });
    }
  }


  const library = new Library();

  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee");

  library.addBookToCatalog("fluid mechanics", book1);
  library.addBookToCatalog("fluid mechanics", book2);

  library.displayBooksByTopic("fluid mechanics");
