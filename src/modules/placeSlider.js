

const placeSlider = () => {
    const swiper = new Swiper('.place__gallery__slider', {
		slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
            pauseOnMouseEnter: true
		},	
        navigation: {
            nextEl: ".place__gallery__slider__btn_next",
            prevEl: ".place__gallery__slider__btn_prev",
        },

	})


    
}
export  default placeSlider()