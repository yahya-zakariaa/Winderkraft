const toggleMenu = document.querySelector(".toggle-menu");
const manu = document.querySelector(".sidebar");
const navbar = document.querySelector(".navbar");
const swaiper = new Swiper(".swiper", {
  slidesPerView: 2,
  breakpoints: {
    1024: {
      slidesPerView: 4,
    }
  },
  loop: true,
  speed: 2000,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },

  
  centeredSlides: true,
  spaceBetween: 100,

  allowTouchMove: false,
});

// handel nav toggle
toggleMenu.addEventListener("click", () => {
  console.log("hello");
  manu.classList.toggle("manu-active");
  toggleMenu.innerHTML = manu.classList.contains("manu-active")
    ? '<i class="fa-solid fa-xmark text-[24px]"></i>'
    : '<i class="fa-solid fa-bars-staggered text-[24px]"></i>';
});

// handel sidebar on blur
manu.addEventListener("click", (e) => {
  e.target.classList.contains("manu-active")
    ? (toggleMenu.innerHTML =
        '<i class="fa-solid fa-bars-staggered text-[24px]"></i>')
    : "";
  e.target.classList.remove("manu-active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
});
