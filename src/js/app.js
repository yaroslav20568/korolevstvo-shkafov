import { hello } from './functions/hello.js';
import Swiper, { Navigation, Pagination } from 'swiper';


// window.addEventListener('unload', () => {
// 	// window.scrollTo(0, 0);
// 	document.documentElement.scrollTop = 0;
// 	// closeModal(document.querySelector('.active-modal'));
// });

if(navigator.userAgent.match('iPhone') || navigator.userAgent.match('Android') || navigator.userAgent.match('iPad') || navigator.userAgent.match('RIM')) {
	console.log('mobile');
} else {
	console.log('desktop');
}

window.addEventListener('DOMContentLoaded', () => {
	let arrow = document.querySelector('.scroll-elem__arrow-btn');
	let order = document.querySelector('.order');
	
	let paddingOrder = +window.getComputedStyle(order).padding.split(' ')[0].replace('px', '') / 2;
	
	
	arrow.addEventListener('click', () => window.scrollTo({
		top: window.innerHeight + paddingOrder,
		behavior: "smooth"
	}));
	
	
	/* STAGES WORK */
	let stagesWorkButtons = document.querySelectorAll('.stages-work-card__button');
	let stagesWorksCards = document.querySelectorAll('.stages-work-card');
	
	
	
	stagesWorkButtons.forEach((button, index) => {
		button.addEventListener('click', () => {
			if(!stagesWorksCards[index].classList.contains('stages-work-card--active')) {
				stagesWorksCards[index].classList.add('stages-work-card--active');
			} else {
				stagesWorksCards[index].classList.remove('stages-work-card--active');
			}
		});
	});
	/* STAGES WORK */
	
	
	/* SWIPER */
	// import Swiper, { Navigation, Pagination } from 'swiper';
	
	Swiper.use([Navigation, Pagination]);
	
	const swiperInstagram = new Swiper('.instagram__swiper', {
		modules: [Navigation, Pagination],

		navigation: {
			nextEl: '.instagram-swiper__button-next',
			prevEl: '.instagram-swiper__button-prev',
		},
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	
		slidesPerView: 4,
		slidesPerGroup: 4,
		spaceBetween: 30,
	
		breakpoints: {
			1201: {
				slidesPerView: 4,
				slidesPerGroup: 4,
				// spaceBetween: 30
			},
			841: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 20
			},
			577: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 20
			},
			280: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 0
			}
		}
	});
	
	
	const swiperReviews = new Swiper('.reviews__swiper', {
		// configure Swiper to use modules
		modules: [Navigation, Pagination],
	
		// loop: true,
		pagination: {
			el: '.reviews-swiper__pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.reviews-swiper__button-next',
			prevEl: '.reviews-swiper__button-prev',
		},
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	
		// speed: 1000,
	
		slidesPerView: 1,
		slidesPerGroup: 1
		// spaceBetween: 30,
	});
	
	/* SWIPER */

	
	
	
	let scrollWidth = window.innerWidth - document.documentElement.clientWidth;
	console.log(scrollWidth);
	
	
	
	/* MODALS */
	
	const closeModalOutside = (elem) => {
		elem.addEventListener('click', (e) => {
			if (e.target.parentElement === document.querySelector('.modal.active-modal')) {
				closeModal(elem);
			}
		});
	};
	
	const openModal = (elem) => {
		// elem.style.display = 'block';
		elem.classList.add('active-modal');
		
		document.body.style.overflow = 'hidden';
		// document.body.style.paddingRight = `${scrollWidth}px`;

		if(navigator.userAgent.match('iPhone') || navigator.userAgent.match('Android') || navigator.userAgent.match('iPad') || navigator.userAgent.match('RIM')) {
			console.log('mobile');
		} else {
			console.log('desktop');
			document.body.style.paddingRight = `${scrollWidth}px`;
		}
	
		closeModalOutside(elem);
	};
	
	const closeModal = (elem) => {
		// elem.style.display = 'none';
		elem.classList.remove('active-modal');
	
		document.body.style.overflow = 'auto';
		document.body.style.paddingRight = '0';
	};
	
	
	let orderButton = document.querySelector('.order__button');
	let reviewsButton = document.querySelector('.reviews__button');
	
	orderButton.addEventListener('click', () => {
		openModal(document.querySelector('.order-modal'));
	});
	
	reviewsButton.addEventListener('click', () => {
		openModal(document.querySelector('.review-modal'));
	});

	document.querySelectorAll(".header__btn, .about__button").forEach(button => {
		button.addEventListener('click', () => {
			openModal(document.querySelector('.consultation-modal'));
		});
	});
	
	document.body.addEventListener('keydown', (e) => {
		if(e.keyCode === 27) {
			closeModal(document.querySelector('.active-modal'));
		}
	});
});