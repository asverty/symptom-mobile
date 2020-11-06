// МЕНЮ
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const categorys = document.querySelector('.categorys');
const menuButton = document.querySelector('.header__menu-button');
const closeMenuButton = document.querySelector('.menu__close-button');

const toggleMenu = () => {
  menu.classList.toggle('menu_hidden');
  categorys.classList.toggle('categorys_hidden');
  header.classList.toggle('header_hidden');
}

menuButton.addEventListener('click', toggleMenu);
closeMenuButton.addEventListener('click', toggleMenu);