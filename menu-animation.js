// menu-animation.js

(function() {
  // Ubrizgavanje CSS stilova za animacije
  var css = `
    /* Desktop meni - fade in animacija za linkove */
    nav ul li a {
      opacity: 0;
      animation: fadeIn 0.8s forwards;
    }
    nav ul li:nth-child(1) a { animation-delay: 0.2s; }
    nav ul li:nth-child(2) a { animation-delay: 0.4s; }
    nav ul li:nth-child(3) a { animation-delay: 0.6s; }
    nav ul li:nth-child(4) a { animation-delay: 0.8s; }
    @keyframes fadeIn {
      to { opacity: 1; }
    }

    /* Hamburger animacija: transformacija u "X" */
    .hamburger.active span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }
    .hamburger.active span:nth-child(2) {
      opacity: 0;
    }
    .hamburger.active span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }

    /* Mobilni meni: slide/fade in efekt */
    .mobile-menu {
      display: none;
      opacity: 0;
      transform: translateY(-20px);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
    .mobile-menu.active {
      display: flex;
      opacity: 1;
      transform: translateY(0);
    }
  `;

  var styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // Funkcija za togglanje mobilnog menija i animaciju hamburgera
  window.toggleMobileMenu = function() {
    var hamburger = document.querySelector(".hamburger");
    var mobileMenu = document.getElementById("mobileMenu");
    if (!hamburger || !mobileMenu) return;
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  };

  // Ako želiš, možeš i dodati event listener (osim ako već koristiš inline onclick)
  document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.querySelector(".hamburger");
    if (hamburger) {
      hamburger.addEventListener("click", window.toggleMobileMenu);
    }
  });
})();
