// remove the active class to all links
function removeActiveClass() {
  links.forEach((link) => link.classList.remove('active'));
}

// add nav-item-active class to the current link
function selectCurrentActiveItem() {
  removeActiveClass();
  this.classList.add('active');
}
