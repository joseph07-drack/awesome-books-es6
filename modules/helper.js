// remove the active class to all links
const removeActiveClass = () => {
  links.forEach((link) => link.classList.remove('active'));
};

// add nav-item-active class to the current link
const selectCurrentActiveItem = () => {
  removeActiveClass();
  this.classList.add('active');
};

const getDate = () => {
  document.querySelector('#date-time').innerText =
    luxon.DateTime.now().toLocaleString(
      luxon.DateTime.DATETIME_FULL_WITH_SECONDS
    );
};

const clearForm = () => {
  form.elements.title.value = '';
  form.elements.author.value = '';
};
