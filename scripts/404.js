// МЕНЮ
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const error404 = document.querySelector('.error-404');
const menuButton = document.querySelector('.header__menu-button');
const closeMenuButton = document.querySelector('.menu__close-button');

const toggleMenu = () => {
  menu.classList.toggle('menu_hidden');
  error404.classList.toggle('error-404_hidden');
  header.classList.toggle('header_hidden');
}

menuButton.addEventListener('click', toggleMenu);
closeMenuButton.addEventListener('click', toggleMenu);