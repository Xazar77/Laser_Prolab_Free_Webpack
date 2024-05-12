
// import Swiper from 'swiper';
// import { Navigation, Autoplay } from 'swiper/modules';
// import 'swiper/css';

// import { getData } from './getData';

const complexTabsSlider = () => {

  const swiper = new Swiper('.slider', {
      // modules: [Autoplay, Navigation],
      direction: 'vertical',
      loop: true,
      slidesPerView: 5,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
      spaceBetween: 10,


  });
      


}
export default complexTabsSlider()