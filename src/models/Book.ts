
export class Book {
  availableCopies: number;

  constructor(private name: string, private copies: number) {
    this.availableCopies = copies; // available copies initialize as the copies
  }

  getName(): string {
    return this.name;
  }

  isAvailable(): boolean {
    return this.copies > 0;
  }

  borrow(): boolean {
    if (this.isAvailable()) {
      this.availableCopies--;
      return true;
    }
    return false;
  }

  returnBook() {
    if (this.availableCopies === this.copies) {
      console.log("copies are max....");
    } else {
      this.availableCopies++;
    }
  }
}
