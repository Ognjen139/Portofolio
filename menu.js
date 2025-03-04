document.addEventListener("DOMContentLoaded", function(){
  var hamburger = document.getElementById("hamburger");
  var mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", function(){
    if (mobileMenu.style.display === "flex") {
      mobileMenu.style.display = "none";
      hamburger.classList.remove("open");
    } else {
      mobileMenu.style.display = "flex";
      hamburger.classList.add("open");

      // Staggered animacija stavki u mobilnom meniju
      var items = mobileMenu.querySelectorAll("a");
      items.forEach(function(item, index){
         item.style.opacity = 0;
         item.style.transform = "translateX(50px)";
         setTimeout(function(){
             item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
             item.style.opacity = 1;
             item.style.transform = "translateX(0)";
         }, index * 150);
      });
    }
  });
});
