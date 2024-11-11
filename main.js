/*~~~~~~~~~~~~~~~~~TOGGLE BUTTON~~~~~~~~~~~~~~~~~~~*/
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click",() => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line")
})

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]");
        hamburger.classList.toggle("ri-close-large-line")
    })
})
/*~~~~~~~~~~~~~~~~~SHOW SCROLL UP~~~~~~~~~~~~~~~~~~~*/
const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up")

    if(this.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    } else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
}
window.addEventListener("scroll", scrollUp)

/*~~~~~~~~~~~~~~~~~CHANGE BACKROUND HEADER~~~~~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~~~SWIPER~~~~~~~~~~~~~~~~~~~*/
const swiper = new Swiper(".swiper", {
  // Optional parameters
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/*~~~~~~~~~~~~~~~~~SCROLL SECTOR ACTIVE LINK~~~~~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~~~SCROLL REVEAL ANIMATION~~~~~~~~~~~~~~~~~~~*/