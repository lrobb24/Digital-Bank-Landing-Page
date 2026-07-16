const openMenuBtn = document.getElementById('open-menu');
const getNav = document.getElementById('mobile-nav');
const closeMenuBtn = document.getElementById('close-menu');

openMenuBtn.addEventListener('click', () => {
    getNav.classList.add('active');
});

closeMenuBtn.addEventListener('click', () => {
    getNav.classList.remove('active');
});