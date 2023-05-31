const hamburger = document.querySelector(".hamburgerMenu");
const navMenu = document.querySelector(".navMenu");
let lastScrollY = window.scrollY;
const contact = document.querySelector('.contact');
const userProfile = document.querySelector('.userProfile');







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

if (localStorage.getItem('newsletterDisplayed')) {

    const halfHeight = Math.floor(document.body.scrollHeight / 2);

    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= halfHeight) {
            const modalBackground = document.querySelector('.modalBackground');
            const emailInput = document.getElementById("email");
            const newsletterModal = document.querySelector(".modal");
            const close = document.querySelector(".close");

            newsletterModal.style.display = "block";
            modalBackground.style.display = "block";


            close.onclick = function () {
                newsletterModal.style.display = "none";
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

            const form = document.querySelector('form');

            form.addEventListener('submit', function(e) {
                const submitBtn = document.querySelector('#submitButton');
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

const modalItem = document.querySelector('.modalItem');
const modalTrigger = document.querySelector(".modalTrigger");

function openModal(itemId) {
    modalItem.style.display = "block";
    // Fetch item information and update the modal content
    fetchItemData(itemId).then(function(data) {
        document.querySelector(".itemImage").src = data.image;
        document.querySelector(".itemName").textContent = data.name;
        document.querySelector(".itemPrice").textContent = "Price: $" + data.price;
        document.querySelector('.itemDescription').textContent = data.description;
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
}

closeItem.addEventListener('click', closeModal);

function fetchItemData(itemId) {
  // Simulating an asynchronous API call
  return new Promise(function(resolve, reject) {
      const dataObj = {
        item1: {
            image: "./assets/prod-1.jpg",
            name: "Malm Chair",
            price: 22,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum velit ullam temporibus quo animi at consectetur saepe esse sint."
        },
        item2: {
            image: "./assets/prod-2.jpg",
            name: 'Pendant Lamp',
            price: 45,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum velit ullam temporibus quo animi at consectetur saepe esse sint."
        },
        item3: {
            image: "./assets/prod-3.jpg",
            name: "Magnolia Dream",
            price: 18,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum velit ullam temporibus quo animi at consectetur saepe esse sint."
        }
      };

    if (dataObj.hasOwnProperty(itemId)) {
    const data = dataObj[itemId];
    resolve(data);
    } else {
        reject(new Error("Item not found"));
    }
  });
}







