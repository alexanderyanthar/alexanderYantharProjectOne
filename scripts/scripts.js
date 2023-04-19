// Variables to target hamburger menu and nav bar
const hamburger = document.querySelector(".hamburgerMenu");
const navMenu = document.querySelector(".navMenu");

// Function to hide or show navbar on scroll

// Functions to close hamburger menu
const showMenu = () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

const closeMenu = () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// event listeners to actively open and close menu
hamburger.addEventListener('click', showMenu);

document.querySelectorAll(".navLink").forEach(n => n.addEventListener('click', closeMenu));