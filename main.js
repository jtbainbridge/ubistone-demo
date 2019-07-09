// Burger Menu
const menuBtn = document.querySelector('.toggle-me');
const burgerMenu = document.querySelector('.burger');

menuBtn.onclick = function () {
    burgerMenu.classList.toggle('visible');
}

// Theme selector
function themeSelect() {
  const lightBtn = document.getElementById('light');
  const darkBtn = document.getElementById('dark');
  const img = document.getElementById('screenshot');

  lightBtn.addEventListener('click', function () {
      lightBtn.classList.add('active');
      darkBtn.classList.remove('active');
      img.setAttribute('src', 'assets/screenshot-light.png');
  });

  darkBtn.addEventListener('click', function () {
      darkBtn.classList.add('active')
      lightBtn.classList.remove('active');
      img.setAttribute('src', 'assets/screenshot-dark.png');
  });
};

window.onload = themeSelect();