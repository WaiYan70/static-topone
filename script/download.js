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
        // navbarLinks.style.height = "43%";
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
        // var line = document.querySelector('.tab-line');
        // line.style.width = e.target.offsetWidth + "px";
        // line.style.left = e.target.offsetLeft + "px";
        content.forEach(content=>{
            content.classList.remove('active')
        });
        content[index].classList.add('active');
    })
})
