class Author {
    constructor(name, birthYear, nationality) {
      this.name = name;
      this.birthYear = birthYear;
      this.nationality = nationality;
    }
  }

  class Book {
    constructor(title, authors, pages) {
      this.title = title;



      this.authors = authors;
      this.pages = pages;
    }
  }

  const author1 = new Author("F. Scott Fitzgerald", 1896, "American");
  const author2 = new Author("Harper Lee", 1926, "American");

  const book1 = new Book("The Great Gatsby", [author1], 180);
  console.log(book1);

  const book2 = new Book("To Kill a Mockingbird", [author2], 281);
  console.log(book2);

  const multipleAuthorsBook = new Book("Collaborative Book", [author1, author2], 350);
  console.log(multipleAuthorsBook);
