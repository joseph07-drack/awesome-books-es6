// remove the active class to all links
const removeActiveClass = () => {
  let links = document.querySelectorAll('.nav-link');
  links.forEach((link) => link.classList.remove('active'));
};

export default class Helper {
  // add nav-item-active class to the current link
  selectCurrentActiveItem() {
    removeActiveClass();
    this.classList.add('active');
  }

  getDate = () => {
    document.querySelector('#date-time').innerText =
      luxon.DateTime.now().toLocaleString(
        luxon.DateTime.DATETIME_FULL_WITH_SECONDS
      );
  };

  clearForm = () => {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  };
}
