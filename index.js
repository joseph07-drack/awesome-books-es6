import Action from './modules/actions';
import Book from './modules/book';
import UI from './modules/utils';
import Helper from './modules/helper';

// create instances for class
const displayContent = new UI();
const action = new Action();
const helper = new Helper();

const form = document.querySelector('.form-input');

const links = document.querySelectorAll('.nav-link');

const saveInfo = document.querySelector('.form-container');
const contactInfo = document.querySelector('.contact');
const displayInfo = document.querySelector('.presentation');

// display books
document.addEventListener('DOMContentLoaded', () => {
  displayContent.addingBooks();
  contactInfo.style.display = 'none';
  saveInfo.style.display = 'none';
});

// Adding a Book
const addButton = document.querySelector('#add-btn');
addButton.addEventListener('click', () => {
  const title = form.elements.title.value;
  const author = form.elements.author.value;
  const newBook = new Book(title, author);

  displayContent.saveBook(newBook);
  action.saveBook(newBook);
  helper.clearForm();
});
