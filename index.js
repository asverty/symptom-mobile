// ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ
const menu = document.querySelector('.menu-popup');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const menuButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.menu-close-button');
const counter = document.querySelector('.counter');


// fullPage.js
const myFullpage = new fullpage('#fullpage', {
	//Navigation
	menu: '#menu',
	lockAnchors: false,
	anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
	navigation: false,
	navigationPosition: 'right',
	navigationTooltips: ['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide'],
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	//Scrolling
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: false,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
	bigSectionsDestination: null,

	//Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Design
	controlArrows: true,
	verticalCentered: true,
	sectionsColor : ['#ffffff', '#ffffff', '#ffffff', '#ffffff'],
	paddingTop: '3em',
	paddingBottom: '10px',
	fixedElements: '#header, .footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
	cards: false,
	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

	//Custom selectors
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,

	//events
	onLeave: function(origin, destination, direction){
		counter.textContent = `${destination.index + 1}/4`;
	},
	afterLoad: function(origin, destination, direction){},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterReBuild: function(){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){}
});


// МЕНЮ
menuButton.addEventListener('click', () => menu.classList.toggle('menu-popup_hidden'));
closeButton.addEventListener('click', () => menu.classList.toggle('menu-popup_hidden'));


// ФУТЕР
const lastSection = document.querySelector('.section_4');
lastSection.addEventListener('swiped-up', () => footer.classList.add('footer_shown'));

const closeFooter = () => {
	footer.classList.remove('footer_shown');
};

lastSection.addEventListener('click', myFullpage.fitToSection());


lastSection.addEventListener('swiped-down', closeFooter);
lastSection.addEventListener('click', closeFooter);
footer.addEventListener('swiped-down', closeFooter);
header.addEventListener('click', closeFooter);