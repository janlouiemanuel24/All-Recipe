const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.menu');
const container = document.querySelector('.container');

const body = document.querySelector('body');


menuToggle.addEventListener('click', () => {
    navList.classList.toggle('open');

})
menuToggle.addEventListener('click', () => {
    container.classList.toggle('open');

});

menuToggle.addEventListener('click', () => {
    body.classList.toggle('open');

});