const menuButton = (toggleId, navbarMenu, menuOverlay,dropdown, navbardropdown) =>{
    const toggle = document.getElementById(toggleId);
    const navbar = document.getElementById(navbarMenu);
    const menuoverlay = document.getElementById(menuOverlay);

    const navbarLinkDropdown = document.getElementById(navbardropdown);
    const dropDown = document.getElementsByClassName(dropdown)[0];
    let dropDownOpen = false;

    toggle.addEventListener('click', () =>{
        // Add show-menu class to navbar menu
        navbar.classList.toggle('show-menu');
        navbar.classList.toggle('active');
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon');
        menuoverlay.classList.toggle('active');
        
        if(toggle.classList.toggle('.navbar-menu-btn-open')) {
            dropDown.classList.remove('active');
            dropDownOpen = false;
            // console.log("toggle : " + dropDownOpen);
        }
    });
    menuoverlay.addEventListener('click', () => {
        navbar.classList.remove('show-menu');
        navbar.classList.remove('active');
        toggle.classList.remove('show-icon');
        menuoverlay.classList.remove('active');

        if(dropDown.classList.contains('active')){
            dropDown.classList.remove('active');
            dropDownOpen = false;
            // console.log("menuoverlay : " + dropDownOpen);
        }
    });
    navbarLinkDropdown.addEventListener('click', (event) => {
        event.preventDefault();
        if(!dropDownOpen){
            dropDown.classList.toggle('active');
            dropDownOpen = true;
            // console.log("dropdown : " + dropDownOpen);
        } else {
            dropDown.classList.remove('active');
            dropDownOpen = false;
            // console.log("dropdown : " + dropDownOpen);
        }
    });
};
menuButton('navbar-toggle','navbar-menu','menu-overlay','dropdown','navbar-link-dropdown');

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
});

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