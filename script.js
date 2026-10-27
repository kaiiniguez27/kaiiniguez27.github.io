document.getElementById('year').textContent = new Date().getFullYear();
const button = document.querySelector('.menu-button');
const nav = document.querySelector('.nav nav');
button.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', isOpen);
});
document.querySelectorAll('.nav nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
