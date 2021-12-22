const HAMBURGER = document.querySelector('.mobile-nav a');
HAMBURGER.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '100%';
});
const CLOSE_ICON = document.querySelector('.closebtn');
CLOSE_ICON.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '0';
});

const CLOSE_ANCHER = document.querySelector('.overlay-content');
CLOSE_ANCHER.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '0';
});
