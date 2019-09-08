const {
  Book
} = require("./Book")

class BookShelf {
  constructor() {
    this.books = [];
    this.last = 0;
  }

  getBookAt(index) {
    return this.books[index]
  }

  appendBook(book) {
    this.books[last] = book;
    last++;
  }

  getLength() {
    return this.last;
  }

  iterator() {
    return new BookShelfIterator(this);
  }
}