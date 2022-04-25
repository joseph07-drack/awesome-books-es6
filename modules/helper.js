export default class Helper {
  // remove the active class to all links
  removeActiveClass = () => {
    links.forEach((link) => link.classList.remove('active'));
  };

  // add nav-item-active class to the current link
  selectCurrentActiveItem = () => {
    removeActiveClass();
    this.classList.add('active');
  };

  getDate = () => {
    document.querySelector('#date-time').innerText =
      luxon.DateTime.now().toLocaleString(
        luxon.DateTime.DATETIME_FULL_WITH_SECONDS
      );
  };

  clearForm = () => {
    form.elements.title.value = '';
    form.elements.author.value = '';
  };
}
