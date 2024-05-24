

const openCallbackModal = () => {

    const btnsRecord = document.querySelectorAll('.btn-record')
    const modalCallback = document.getElementById('main__modal')
    const closeBtn = document.getElementById('close-lazer-modal')
    

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
            duration: 500,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
                if(count === 1){    
                    modalCallback.style.opacity = progress * count;
                } else if(count === -1){
                    modalCallback.style.opacity = 1 - progress;

                }
            }
        });
    }

    const openModal = () => {
        modalCallback.classList.add('autoopen')
        document.body.style.overflow = 'hidden'
        choiseOpacity(1)
    }

    const closeModal = () => {
        choiseOpacity(-1)
        document.body.style.overflow = ''
        setTimeout(()=> {
            modalCallback.classList.remove('autoopen')
        },1000)
    }
   
    btnsRecord.forEach(btn => {
        btn.addEventListener('click', openModal)
    })

    closeBtn.addEventListener('click', closeModal)

    document.addEventListener('keydown', (e) => {
        if(e.keyCode === 27) {
            closeModal()
        }
    })

    document.addEventListener('click', (e) => {
        if(e.target.classList.contains('main__modal')) {
            closeModal()
        }
    })
}

export default openCallbackModal()