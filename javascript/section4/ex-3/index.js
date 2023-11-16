class Library {
    constructor() {
      this.books = [];
    }

    addBook(book) {
      this.books.push(book);
    }
  }

  class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }

const Library1=new Library();
const book1=new Book("Jawan","Sharukh");
const book2=new Book("pathan","khan");
const book3=new Book("Hero","king");
Library1.addBook(book1);
Library1.addBook(book2);
Library1.addBook(book3);

console.log(Library1.books);