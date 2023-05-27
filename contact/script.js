document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
});

const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.menu');
const container = document.querySelector('.container');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
    container.classList.toggle('open');
});
