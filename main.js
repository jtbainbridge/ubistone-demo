// Burger Menu
const menuBtn = document.querySelector('.toggle-me');
const burgerMenu = document.querySelector('.burger');

menuBtn.onclick = function () {
    burgerMenu.classList.toggle('visible');
}