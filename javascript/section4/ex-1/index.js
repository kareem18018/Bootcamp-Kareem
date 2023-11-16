class Book{
    constructor(tittle,author,pages=0){
    if(!tittle || !author){
        throw new Error("Title and author are mandatory for a Book")
    };
    this.tittle=tittle;
    this.author=author;
    this.pages=pages;

    }
    }

    const Book1=new Book("Unwanted Killer","naresh",350);
    console.log(Book1);