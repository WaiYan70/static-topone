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
    } else {
        menuButton.classList.remove('open');
        menuOpen = false
    }
});

// The Contact Form Animation For Input Box Container

const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});