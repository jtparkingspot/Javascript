// Object-Oriented: Define the Book class
class Book {
    constructor(title, author, genre) {
        this.title = title;
        this.author = author;
        this.genre = genre;
    }

    getSummary() {
        return `${this.title} by ${this.author}, Genre: ${this.genre}`;
    }
}

// Object-Oriented: Define the Bookstore class
class Bookstore {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    findBooksByGenre(genre) {
        // Functional: Use filter to find books by genre
        return this.books.filter(book => book.genre === genre);
    }

    displayBooks() {
        // Functional: Use forEach to display book summaries
        this.books.forEach(book => console.log(book.getSummary()));
    }
}

// Imperative: Create bookstore and add books
const myStore = new Bookstore("Main Street Books");
myStore.addBook(new Book("1984", "George Orwell", "Dystopian"));
myStore.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", "Classic"));

// Imperative: Display all books
console.log("All Books:");
myStore.displayBooks();

// Functional + Imperative: Find and display dystopian books
console.log("\nDystopian Books:");
const dystopianBooks = myStore.findBooksByGenre("Dystopian");
dystopianBooks.forEach(book => console.log(book.getSummary()));

