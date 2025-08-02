const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Always scroll to top on page load
window.onload = function () {
  // Prevent auto-scroll to hash anchor (like #contact)
  if (window.location.hash) {
    history.replaceState(null, null, ' ');
  }
  window.scrollTo(0, 0);
};
