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
	anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'footer'],
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
		let numSlides = document.querySelectorAll('.section').length;
		if (destination.index + 1 == 5) {
			counter.textContent = `4/${numSlides - 1}`
			footer.classList.remove('footer_hidden');
		} else {
			counter.textContent = `${destination.index + 1}/${numSlides - 1}`
			footer.classList.add('footer_hidden');
		}
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
document.addEventListener('click', (event) => {
	if (event.target !== footer && !footer.classList.contains('footer_hidden')) {
		footer.classList.add('footer_hidden');
		myFullpage.silentMoveTo('fourthPage');
	}
});