class Book {
    constructor(title, author, pages) {
      this.title = title;
      this.author = author;
      this.pages = pages;
    }
  }

  class SpecializedBook extends Book {
    constructor(title, author, pages, topic) {
      super(title, author, pages);
      this.topic = topic;
    }
  }

  const regularBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 380);
  console.log(regularBook);

  const specializedBook = new SpecializedBook("Introduction to JavaScript", "John Doe", 450, "Programming");
  console.log(specializedBook);
