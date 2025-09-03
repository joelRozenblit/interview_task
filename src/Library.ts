import type { Book } from "./models/Book.js";

export class Library {
  books: Book[];

  constructor(books: Book[]) {
    this.books = books;
  }

  searchBook(name: string): Book | null {
    const book = this.books.find((b) => b.getName() === name);
    // TODO: fix type checking
    if (typeof book === "undefined") return null;
    else return book;
  }

  borrowBook(book: Book): Book | null {
    // inside method check if available copies
    // and update if there is
    const borrowed = book.borrow();
    if (borrowed) return book;
    else return null;
  }

  returnBook(book: Book) {
    book.returnBook();
  }
}
