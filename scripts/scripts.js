const hamburger = document.querySelector(".hamburgerMenu");
const navMenu = document.querySelector(".navMenu");
let lastScrollY = window.scrollY;
const contact = document.querySelector('.contact');
const userProfile = document.querySelector('.userProfile');
const modalBackground = document.querySelector('.modalBackground');
const submitBtn = document.querySelector('#submitButton');
const form = document.querySelector('form');
const emailInput = document.getElementById("email");
const modal = document.querySelector(".modal");
const span = document.getElementsByClassName("close")[0];


/* resources
To make the navbar hide whenever the user scrolls:
https://www.youtube.com/watch?v=Q_XZk5Vnujw&ab_channel=dcode

To build a functional hamburger menu/responsive navbar:
https://www.youtube.com/watch?v=At4B7A4GOPg&t=2s&ab_channel=WebDevSimplified
*/


contact.addEventListener('click', function(){
    contact.classList.toggle('active');
});

userProfile.addEventListener('click', function(){
    userProfile.classList.toggle('active');
})

const showMenu = () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

const closeMenu = () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
        closeMenu();
    }
    lastScrollY = window.scrollY;
})

hamburger.addEventListener('click', showMenu);

document.querySelectorAll(".navLink").forEach(n => n.addEventListener('click', closeMenu));

// ** THE CODE BELOW HAS BEEN LARGELY MADE WITH CHATGPT!


const value = localStorage.getItem('newsletterDisplayed');

if (!localStorage.getItem('newsletterDisplayed')) {

    const halfHeight = Math.floor(document.body.scrollHeight / 2);

    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= halfHeight) {

            modal.style.display = "block";
            modalBackground.style.display = "block";


            span.onclick = function () {
                modal.style.display = "none";
                modalBackground.style.display = "none";
            };

            localStorage.setItem('newsletterDisplayed', true);

            emailInput.addEventListener('input', function () {
                const email = this.value.trim();
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailRegex.test(email)) {
                    this.style.border = '2px solid red';
                } else {
                    this.style.border = '2px solid green';
                }
            });

            form.addEventListener('submit', function(e) {
                const email = this.value.trim();
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                

                if (!emailRegex.test(email)) {
                    emailInput.style.border = '2px solid red';
                    // can't get the else code to work
                } else {
                    modalContent.innerHTML = '<h2>Thank you for subscribing!</h2><p>You are now subscribed to our newsletter.</p>';

                    submitBtn.style.display = 'none';
                }
            });

            window.removeEventListener('scroll', arguments.callee);
        }
    });
}



