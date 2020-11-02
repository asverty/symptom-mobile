const menuPopup = document.querySelector('.menu');
const toggleMenu = () => menuPopup.classList.toggle('menu_hidden');

// .header-main - для главной страницы, .header - для остальных
const menuButton = document.querySelector('.header-main__menu-button') || document.querySelector('.header__menu-button');
menuButton.addEventListener('click', toggleMenu);

const closeMenuButton = document.querySelector('.menu__close-button');
closeMenuButton.addEventListener('click', toggleMenu);