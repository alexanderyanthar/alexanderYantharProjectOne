import { fetchItemData  } from "./firebase.js";

const hamburger = document.querySelector(".hamburgerMenu");
const navMenu = document.querySelector(".navMenu");
let lastScrollY = window.scrollY;
const contact = document.querySelector('.contact');
const userProfile = document.querySelector('.userProfile');
const checkout = document.querySelector('.checkout');
const cartMenu = document.querySelector('.cartMenu');


/* resources
To make the navbar hide whenever the user scrolls:
https://www.youtube.com/watch?v=Q_XZk5Vnujw&ab_channel=dcode

To build a functional hamburger menu/responsive navbar:
https://www.youtube.com/watch?v=At4B7A4GOPg&t=2s&ab_channel=WebDevSimplified
*/




checkout.addEventListener('click', function() {
    cartMenu.classList.toggle('active');
})

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

const modal = document.querySelector(".modal");
const modalBackground = document.querySelector('.modalBackground');
const closeBtn = document.querySelector('.close');
const subscribeBtn = document.querySelector('#submitButton');

function displayModal() {
    modal.style.display = 'block';
    modalBackground.style.display = 'block';
}

setTimeout(displayModal, 3000);

function closeNewsletterModal() {
    modal.style.display = 'none';
    modalBackground.style.display = 'none';
}

closeBtn.addEventListener('click', closeNewsletterModal);
const newsletterDisplay = document.querySelector(".form")
const emailInput = document.querySelector('#email');

subscribeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    newsletterDisplay.scrollIntoView({behavior: 'smooth'});
    modal.style.display = 'none';
    modalBackground.style.display = 'none';

    setTimeout(function() {
        emailInput.focus();
    }, 350)

})

const thanksModal = document.querySelector('.thanksModal');
const closeThanksModal = document.querySelector('.closeThanksModal');

closeThanksModal.addEventListener('click', function() {
    thanksModal.style.display = 'none';
    modalBackground.style.display = 'none';
})


const newsletterForm = document.querySelector('form');

newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();

    thanksModal.style.display = 'block';
    modalBackground.style.display = 'block';
    setTimeout(function() {
        thanksModal.style.display = 'none';
        modalBackground.style.display = 'none';
    }, 3000)
    newsletterForm.reset();
    emailInput.blur();
}) 


const modalItem = document.querySelector('.modalItem');
const cartAmount = document.querySelector('.cartAmount');
const cartIconModal = document.querySelector(".cartModal");

let cartIconListener;
let cartItems = [];



function openModal(itemId) {
    modalItem.style.display = "block";
    // Fetch item information and update the modal content
    fetchItemData(itemId).then(function(data) {
        document.querySelector(".itemImage").src = data.image;
        document.querySelector(".itemName").textContent = data.name;
        document.querySelector(".itemPrice").textContent = "Price: $" + data.price;
        document.querySelector('.itemDescription').textContent = data.description;

        if (cartIconListener) {
            cartIconModal.removeEventListener('click', cartIconListener);
        }

        cartIconListener = function() {
            incrementCartAmount();
        }

        
        cartIconModal.addEventListener('click', cartIconListener);
    }).catch(function(error) {
    console.error(error);
    closeModal();
  });
}


const cartIcons = document.querySelectorAll('.modalTrigger');

cartIcons.forEach(function(icon){
    const itemId = icon.getAttribute("data-item-id");

    icon.addEventListener('click', function(){
        openModal(itemId);
    })
})

const closeItem = document.querySelector('.closeItem');

function closeModal() {
    modalItem.style.display = "none";
    cartIconModal.removeEventListener('click', cartIconListener);

}

closeItem.addEventListener('click', closeModal);

function incrementCartAmount(itemId) {
    const currentAmount = parseInt(cartAmount.textContent);
    const newAmount = currentAmount + 1;
    cartAmount.textContent = newAmount;

    cartItems.push(itemId);
}









