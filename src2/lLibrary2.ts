import type { Title } from "./models/Tilte";

export class Library {
  titles: Title[];

  constructor(titles: Title[]) {
    this.titles = titles;
  }

  searchBook(name: string): Title | null {
    const title = this.titles.find((t) => t.name === name);
    // TODO: fix type checking
    if (typeof title === "undefined") return null;
    else return title;
  }

  borrowBook(title: Title): Title | null {
    const borrowed = title.borrow();
    if (borrowed) return title;
    else return null;
  }

  returnBook(title: Title) {
    title.return();
  }
}
