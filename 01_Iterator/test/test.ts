import { describe, it } from "mocha";
import { expect } from "chai";
import { Iterator } from "../Iterator";
import { Book } from "../Book";
import { BookShelf } from "../BookShelf";
import { BookShelfIterator } from "../BookShelfIterator";

describe("Iterator", () => {
  it("should return the correct book names", () => {
    let bookShelf: BookShelf = new BookShelf();
    bookShelf.appendBook(new Book("Around the World in 80 Days"));
    bookShelf.appendBook(new Book("Bible"));
    let it: Iterator = bookShelf.iterator();

    it.hasNext();
    let book: Book = it.next() as Book;
    expect(book.getName()).to.equal("Around the World in 80 Days");

    it.hasNext();
    book = it.next() as Book;
    expect(book.getName()).to.equal("Bible");
  });
});
