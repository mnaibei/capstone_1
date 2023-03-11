// hamburger menu
const hamburger = document.querySelector('.hamburger');
const mobile = document.querySelector('.mobile');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile.classList.toggle('active');
});

document.querySelectorAll('.mobile').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  mobile.classList.remove('active');
}));