const menuButton = document.querySelector('.menu-button'); // Dodaj dugme za otvaranje menija
const mobileMenu = document.querySelector('.mobile-menu');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});
