import { DateTime } from '../node_modules/luxon/src/luxon.js';

// remove the active class to all links
const removeActiveClass = () => {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => link.classList.remove('active'));
};

export default class Helper {
  // add nav-item-active class to the current link
  selectCurrentActiveItem() {
    removeActiveClass();
    this.classList.add('active');
  }

  getDate = () => {
    document.querySelector('#date-time').innerText = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  };

  clearForm = () => {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  };
}
