let hamburger_icon = document.querySelector('.mobile-nav a');
hamburger_icon.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '100%';
});
let close_icon = document.querySelector('.closebtn');
close_icon.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '0';
});

let close_anchr = document.querySelector('.overlay-content');
close_anchr.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '0';
});
