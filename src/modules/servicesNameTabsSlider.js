


const servicesNameTabsSlider = () => {

    const swiper = new Swiper('.services__nav', {
        slidesPerView: 5,
        loop: true,
   	
        navigation: {
            nextEl: ".services__nav__btn_next",
            prevEl: ".services__nav__btn_prev",
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 2,
            },
            900: {
                slidesPerView: 4,
            },
          


        },
    })
}
export default servicesNameTabsSlider()