// small screen toggle 
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");
  menuBtn.classList.toggle("active");

  if (menuBtn.name === "menu-outline") {
    menuBtn.name = "close-outline";
  } else {
    menuBtn.name = "menu-outline";
  }
  //  console.log(menuBtn)
});

const nav = document.getElementById('navBar');
const heroSection = document.querySelector('hero');

let navBarHeight = 0;
let heroHeight = 0;

if (nav && heroSection) {
  navBarHeight = nav.offsetHeight;
  heroHeight = heroSection.offsetHeight;
}


window.addEventListener('scroll', () => {
  if (window.scrollY > heroHeight - navBarHeight) {
    navBar.classList.add('sticky');
  } else {
    navBar.classList.remove('sticky')
  }
})

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});


let list = document.querySelectorAll('.list');
// let cardtype = document.querySelectorAll('.cardType');


for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove('active');
    }
    this.classList.add('active');

    // let dataFilter = this.getAttribute('data-filter');
  });
}