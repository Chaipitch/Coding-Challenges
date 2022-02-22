const burgerToggle = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

const toggleNav = () => {
    nav.classList.toggle('nav-active');
}


burgerToggle.addEventListener('click',toggleNav);