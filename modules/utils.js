import Action from './actions.js';

export default class UI {
  addingBooks = () => {
    const action = new Action();
    const books = action.getBooks();
    books.forEach((book) => {
      this.newBook(book);
    });
  };

  /* creating a new Book */
  newBook = (book) => {
    const booksCatalogue = document.querySelector('.lib-catalogue');
    const bookCatalogue = document.createElement('div');
    bookCatalogue.className = 'single-book';
    const authorSection = document.createElement('div');
    authorSection.className = 'author-name';
    const span = document.createElement('span');
    span.textContent = '"by"';
    const bookTitle = document.createElement('p');
    bookTitle.className = 'title';
    const bookAuthor = document.createElement('p');
    bookAuthor.className = 'author';
    const buttonRemove = document.createElement('button');
    buttonRemove.className = 'btn-remove';
    buttonRemove.textContent = 'Remove';
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    authorSection.append(bookTitle, span, bookAuthor);
    bookCatalogue.append(authorSection, buttonRemove);
    booksCatalogue.appendChild(bookCatalogue);
  };

  saveBook = (book) => {
    this.newBook(book);
  };

  deleteBook = (button) => {
    const divTag = button.parentNode;
    divTag.remove();
  };
}
