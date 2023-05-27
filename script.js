const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.menu');
const Button = document.querySelector('.btn');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
    Button.classList.toggle('open');
});
