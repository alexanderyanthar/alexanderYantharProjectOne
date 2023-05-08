// Variables to target hamburger menu and nav bar
const hamburger = document.querySelector(".hamburgerMenu");
const navMenu = document.querySelector(".navMenu");
let lastScrollY = window.scrollY;
const contact = document.querySelector('.contact');
const userProfile = document.querySelector('.userProfile');

// Get the modal
var modal = document.getElementById("newsletter-modal");

// Get the button that opens the modal
var btn = document.getElementById("newsletter-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to hide or show navbar on scroll

/* resources
To make the navbar hide whenever the user scrolls:
https://www.youtube.com/watch?v=Q_XZk5Vnujw&ab_channel=dcode

To build a functional hamburger menu/responsive navbar:
https://www.youtube.com/watch?v=At4B7A4GOPg&t=2s&ab_channel=WebDevSimplified
*/


// function to open contact menu
contact.addEventListener('click', function(){
    contact.classList.toggle('active');
});

userProfile.addEventListener('click', function(){
    userProfile.classList.toggle('active');
})

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
window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
        closeMenu();
    }
    lastScrollY = window.scrollY;
})

hamburger.addEventListener('click', showMenu);

document.querySelectorAll(".navLink").forEach(n => n.addEventListener('click', closeMenu));

// ** THE CODE BELOW HAS BEEN LARGELY MADE WITH CHATGPT!


// Check if the modal has been displayed before
// Check if the newsletter has already been displayed
const value = localStorage.getItem('newsletterDisplayed');
console.log(value); // Output the value to the console

if (value) {
    console.log('Value is truthy');
} else {
    console.log('Value is falsy');
}


if (!localStorage.getItem('newsletterDisplayed')) {

    // Get the halfway point of the page
    const halfHeight = Math.floor(document.body.scrollHeight / 2);
    console.log('halfHeight:', halfHeight);

    // Check if the user has scrolled past the halfway point
    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= halfHeight) {
            console.log('User has scrolled passed halfway');

            // Display the newsletter
            // ...
            modal.style.display = "block";

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            };

            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };

            // Set the flag indicating that the newsletter has been displayed
            localStorage.setItem('newsletterDisplayed', true);
            console.log('newsletter displayed');

            // Remove the scroll event listener
            window.removeEventListener('scroll', arguments.callee);
        }
    });
}
