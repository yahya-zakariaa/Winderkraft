const toggleMenu = document.querySelector(".toggle-menu");
const manu = document.querySelector(".sidebar");
const navbar = document.querySelector(".navbar");
const closeMenu = document.querySelector("#close-menu");
const swaiper = new Swiper(".swiper", {
  slidesPerView: 2,
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 100,
    },
  },
  loop: true,
  speed: 2000,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },

  centeredSlides: true,
  spaceBetween: 70,
});
new Splide("#testimonials", {
  type: "loop",
  breakpoints: {
    768: {
      arrows: false,
      gap: 20,
    },
  },
}).mount();

// handel nav toggle
toggleMenu.addEventListener("click", () => {
  manu.classList.toggle("manu-active");
});

// handel sidebar on blur
manu.addEventListener("click", (e) => {
  e.target.classList.remove("manu-active");
});

// handel close sidebar btn

closeMenu.addEventListener("click", () => {
  manu.classList.remove("manu-active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
});
