
// import Swiper from 'swiper';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';

// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
 const adressSlider = () => {

	const swiper = new Swiper(".adress__slider", {
		direction: 'horizontal',
		// modules: [Autoplay],
		// loopAddBlankSlides: true,
		slidesPerView: 5,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true
		},	


		breakpoints: {
			300: {
				slidesPerView: 1,
			},
			500: {
				slidesPerView: 2,
			},
			900: {
				slidesPerView: 3,
			},
			1300: {
				slidesPerView: 4,
			},
			1440: {
				slidesPerView: 5,
			}
		}

	});

}
export default  adressSlider()