export class Book {
  borrowed: number | null = null;
  expectedReturn : number | null = null
  
  borrow() {
    this.borrowed = Date.now()
    this.expectedReturn = this.borrowed + (1000*60*60*24)
  }

  return() {
    this.borrowed = null;
    this.expectedReturn = null;
  }
}
