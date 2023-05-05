// Variables
const contact = document.querySelector('.contact');
const userProfile = document.querySelector('.userProfile');

contact.addEventListener('click', function(){
    contact.classList.toggle('active');
})

userProfile.addEventListener('click', function(){
    userProfile.classList.toggle('active');
})