const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.menu');
const navCard = document.querySelector('.card');


menuToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
});menuToggle.addEventListener('click', () => {
    navCard.classList.toggle('open');
})