// Pronadji dugme za otvaranje menija (hamburger) i meni
const menuButton = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobileMenu'); // Meni ima ID 'mobileMenu'

// Dodaj event listener za klik na hamburger
menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('active'); // Dodaj ili ukloni klasu 'active' za prikazivanje menija
});
