import Action from './modules/actions';
import Book from './modules/book';
import UI from './modules/utils';
import Helper from './modules/helper';

const form = document.querySelector('.form-input');

const links = document.querySelectorAll('.nav-link');

/* displaying the UI */
const displayContent = new UI();
const action = new Action();

const saveInfo = document.querySelector('.form-container');
const contactInfo = document.querySelector('.contact');
const displayInfo = document.querySelector('.presentation');

document.addEventListener('DOMContentLoaded', () => {
  displayContent.addingBooks();
  contactInfo.style.display = 'none';
  saveInfo.style.display = 'none';
});
