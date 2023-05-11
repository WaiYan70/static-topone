// for sticky navigation bar 
window.onscroll = function(){myFunction()};

const navbar = document.getElementsByClassName('navbar')[0];
const sticky = navbar.offsetTop;

function myFunction(){
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
}

// for Menubar (HamBurger Stack)
const menuButton = document.getElementsByClassName('menu_btn')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

let menuOpen = false;

menuButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    if (!menuOpen) {
        menuButton.classList.add('open');
        menuOpen = true;
        // navbarLinks.style.height = "41.65%";
    } else {
        menuButton.classList.remove('open');
        menuOpen = false
        // navbarLinks.style.height = "0%";
    }
});

// Swiper for Image Slider with Infinity Loop 

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

// Swiper for Image Slider with Auto Play Progress
// Main Slide Image (advertisement)
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // dynamicBullets: true,
    },
    navigation: {
      nextEl: ".main-image-next",
      prevEl: ".main-image-prev"
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
});

// Swiper for card slider with infinite loop
// Brand Products
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 35,
  // slidesPerGroup: 3,
  loop: true,
  centerSlide:'true',
  fade: 'true',
  // loopFillGroupWithBlank: true,
  gragCursor: 'true',
  pagination: {
    el: ".swiper-pagination-card",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".brand-product-card-next",
    prevEl: ".brand-product-card-prev",
  },
  // 400px x 736px is iphone 7+ size
  // 375px x 667px is iphone SE size
  breakpoints: {
    0: {
      slidesPerView: 1,
    }, 
    690: {
      slidesPerView: 2,
    }, 
    1080: {
      slidesPerView: 3,
    }
  }
});

// Testimonial Section

var swiper = new Swiper(".testimonial", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination-testimonial",
    clickable: true,
  },
  navigation: {
    nextEl: ".testimonial-next",
    prevEl: ".testimonial-prev",
  },
});