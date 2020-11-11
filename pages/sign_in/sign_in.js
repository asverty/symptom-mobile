// МЕНЮ
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const authorization = document.querySelector('.authorization');
const menuButton = document.querySelector('.header__menu-button');
const closeMenuButton = document.querySelector('.menu__close-button');

const toggleMenu = () => {
  menu.classList.toggle('menu_hidden');
  authorization.classList.toggle('authorization_hidden');
  header.classList.toggle('header_hidden');
}

menuButton.addEventListener('click', toggleMenu);
closeMenuButton.addEventListener('click', toggleMenu);