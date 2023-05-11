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
        // navbarLinks.style.height = "40%";
    } else {
        menuButton.classList.remove('open');
        menuOpen = false
        // navbarLinks.style.height = "0%";
    }
});

// For Tab Session
const tabsButton = document.querySelectorAll('.tab');
const content = document.querySelectorAll('.content');

// const tabsButton = document.getElementsByClassName('tab-button')[0];
// const content    = document.getElementsByClassName('content')[0];

tabsButton.forEach((tabButton, index) => {
    tabButton.addEventListener('click', (e) => {
        tabsButton.forEach(tab => {
            tab.classList.remove('active')
        });
        tabButton.classList.add('active');
        content.forEach(content=>{
            content.classList.remove('active')
        });
        content[index].classList.add('active');
    })
})

// Product Card

// Product - 01 (Split Printer)
document.querySelectorAll('.product-card-image-small-1').forEach(image =>{
    image.addEventListener('click', () => {
        var src = image.getAttribute('src');
        document.querySelector('.product-card-image-big-1').src = src;
    });
});

// Product - 02 (Split Printer)
document.querySelectorAll('.product-card-image-small-2').forEach(image =>{
    image.addEventListener('click', () => {
        var src = image.getAttribute('src');
        document.querySelector('.product-card-image-big-2').src = src;
    });
});

// Product - 03 (Split Printer)
document.querySelectorAll('.product-card-image-small-3').forEach(image =>{
    image.addEventListener('click', () => {
        var src = image.getAttribute('src');
        document.querySelector('.product-card-image-big-3').src = src;
    });
});

// Product - 04 (Split Printer)
document.querySelectorAll('.product-card-image-small-4').forEach(image =>{
    image.addEventListener('click', () => {
        var src = image.getAttribute('src');
        document.querySelector('.product-card-image-big-4').src = src;
    });
});

// Product - 05 (Wireless Scanner)
document.querySelectorAll('.product-card-image-small-5').forEach(image =>{
    image.addEventListener('click', () => {
        var src = image.getAttribute('src');
        document.querySelector('.product-card-image-big-5').src = src;
    });
});

// Product - 06 (Wireless Scanner)
document.querySelectorAll('.product-card-image-small-6').forEach(image =>{
    image.addEventListener('click', () => {
        var src = image.getAttribute('src');
        document.querySelector('.product-card-image-big-6').src = src;
    });
});

// Product - 07 (Cash Drawer)
document.querySelectorAll('.product-card-image-small-7').forEach(image =>{
    image.addEventListener('click', () => {
        var src = image.getAttribute('src');
        document.querySelector('.product-card-image-big-7').src = src;
    });
});

// Product - 08 (Cash Drawer)
document.querySelectorAll('.product-card-image-small-8').forEach(image =>{
    image.addEventListener('click', () => {
        var src = image.getAttribute('src');
        document.querySelector('.product-card-image-big-8').src = src;
    });
});