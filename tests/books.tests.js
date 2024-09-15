let { getBooks, getBookById, addBook } = require('../book');
const { title } = require('process');

describe("Books Function", ()=>{
it("should get all books", ()=>{
    let books = getBooks();
    expect(books.length).tobe(4);
    expect(books).toEqual([
        { id: 1, title: '1984', author: 'George Orwell' },
        { id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen' },
        { id: 4, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
      ]);
});

it("Should return book by id", ()=>{
    let book = getBookById(1);
    expect(book).toEqual({ id: 1, title: '1984', author: 'George Orwell' });
});

it("should return undefined for a non-existant book", (){
    let book= getBookById(99);
    expect(book).toBeUndefined();
});

it("should added new book", ()=>{
    let newBook = {title: "New Book", autthor: "Author Name"};
let addedBook = addBook(newBook);
addedBook.toEqual({id: 5, title: "New Book", autthor: "Author Name"})
})

const books = getBooks();
expect(books.length).toBe(5)

});
