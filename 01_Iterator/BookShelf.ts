import { Aggregate } from "./Aggregate";
import { Iterator } from "./Iterator";
import { Book } from "./Book";
import { BookShelfIterator } from "./BookShelfIterator";

export class BookShelf implements Aggregate {
  books: Book[];
  last: number;

  constructor() {
    this.books = [];
    this.last = 0;
  }

  getBookAt(index: number): Book {
    return this.books[index];
  }

  appendBook(book: Book): void {
    this.books[this.last] = book;
    this.last++;
  }

  getLength(): number {
    return this.last;
  }

  iterator(): Iterator {
    return new BookShelfIterator(this);
  }
}
