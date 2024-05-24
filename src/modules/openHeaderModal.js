// import { animate } from "./helpers"

const openHeaderModal = () => {
    const menuBtn = document.querySelector('.header__burger')
    const modalMenu = document.querySelector('.modal__header')
    const overlay = document.querySelector('.header__overlay')
    const closeBtn = document.querySelector('.modal__header_close')
    
    let count = 0

    const animate = ({timing, draw, duration}) => {

        let start = performance.now();
        requestAnimationFrame(function animate(time) {
            // timeFraction изменяется от 0 до 1
            let timeFraction = (time - start) / duration;
            if (timeFraction > 1) timeFraction = 1;
    
            // вычисление текущего состояния анимации
            let progress = timing(timeFraction);
    
            draw(progress); // отрисовать её
    
            if (timeFraction < 1) {
                requestAnimationFrame(animate);
            }
    
        });
    };
    
    const choiseOpacity = (count) => {
        animate({
            duration: 1000,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
                if(count === 1){
                    overlay.classList.add('header__overlay_active')      
                    overlay.style.opacity = progress * count;
                } else if(count === -1){
                    overlay.style.opacity = 1 - progress;
                    setTimeout(()=> {
                        overlay.classList.remove('header__overlay_active')      
                        

                    },1000)
                }
            }
        });
    }

    const openModal = () => {
        choiseOpacity(1)
        menuBtn.classList.add('header__burger_active')
        modalMenu.classList.add('modal__header_active') 
        document.body.style.overflow = 'hidden'

    }

    const closeModel = () => {
        menuBtn.classList.remove('header__burger_active')
        modalMenu.classList.remove('modal__header_active') 
        document.body.style.overflow = ''
        choiseOpacity(-1)
    }
  
    menuBtn.addEventListener('click', openModal)

    closeBtn.addEventListener('click', closeModel)

    document.addEventListener('click', (e) => {
        if(e.target.closest('.header__overlay')) {
            closeModel()
        }
    })

    document.addEventListener('keydown', (e) => {
        if(e.keyCode === 27) {
            closeModel()
        }
    })

}
export default openHeaderModal()