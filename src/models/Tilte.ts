import type { Book } from "./Book2";

export class Title {
  name: string;
  books: Book[];
  availableCopies: number;

  constructor(name: string, books: Book[]) {
    this.books = books;
    this.availableCopies = books.length;
    this.name = name
  }

  borrow(): boolean {
    const book = this.books.find((b) => b.borrowed === null);
    if (book) {
      book.borrow();
      return true;
    }
    return false;
  }
  
  return(){
      
}
}

// Todo:
