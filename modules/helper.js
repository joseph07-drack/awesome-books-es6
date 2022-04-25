// remove the active class to all links
function removeActiveClass() {
  links.forEach((link) => link.classList.remove('active'));
}

// add nav-item-active class to the current link
function selectCurrentActiveItem() {
  removeActiveClass();
  this.classList.add('active');
}

function getDate() {
  document.querySelector('#date-time').innerText =
    luxon.DateTime.now().toLocaleString(
      luxon.DateTime.DATETIME_FULL_WITH_SECONDS
    );
}
