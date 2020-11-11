// МЕНЮ
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const brands = document.querySelector('.brands');
const menuButton = document.querySelector('.header__menu-button');
const closeMenuButton = document.querySelector('.menu__close-button');

const toggleMenu = () => {
  menu.classList.toggle('menu_hidden');
  brands.classList.toggle('brands_hidden');
  header.classList.toggle('header_hidden');
}

menuButton.addEventListener('click', toggleMenu);
closeMenuButton.addEventListener('click', toggleMenu);