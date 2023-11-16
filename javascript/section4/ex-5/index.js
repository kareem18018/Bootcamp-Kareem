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


  const specializedBook1 = new SpecializedBook("Introduction to JavaScript", "John Doe", 450, "Programming");
  const specializedBook2 = new SpecializedBook("Introduction to Java", "james gosling Doe", 450);

  console.log(specializedBook1);
  console.log(specializedBook2);

