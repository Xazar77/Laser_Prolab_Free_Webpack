

const hoverHeaderFooter = () => {
    const hoverBgBtns = (selector, color1, color2) => {
        
        const btns = document.querySelectorAll(selector)
    
        
        btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                
                e.preventDefault();
                btn.style.background= color1
                setTimeout(() => {
                    btn.style.background= color2
                },200)
            })
        })
    }

    const hoverColorTextBtns = (selector, color1, color2) => {
        const btns = document.querySelectorAll(selector)
    
        btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // console.log(btn)
                e.preventDefault();
                    btn.style.color= color1
                setTimeout(() => {
                    btn.style.color= color2
                },200)
            })
        })
    }

    const hoverBtnsSvg = ({btnSelector, iconSelector, btnColorBefore, btnColorAfter, iconColorBefore, iconColorAfter}) => {


        const btns = document.querySelectorAll(btnSelector)
        const icons = document.querySelectorAll(iconSelector)
    
        btns.forEach((btn,i) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                btn.style.backgroundColor= btnColorBefore
                icons[i].style.cssText = iconColorBefore
                setTimeout(() => {
                    btn.style.backgroundColor= btnColorAfter
                    icons[i].style.cssText = iconColorAfter;
                },100)
        
            })
        })
    }

    hoverBgBtns('.header__contact__record', 'rgb(191 56 121)', 'linear-gradient(90deg, rgb(231, 135, 181) 2.8%, rgb(248, 169, 177) 100%)')
    hoverColorTextBtns('.header__contact__record', '#ffffff', '#000000')

    hoverBgBtns('.footer__btns_record', 'rgb(191 56 121)', 'linear-gradient(90deg, rgb(231, 135, 181) 2.8%, rgb(248, 169, 177) 100%)')
    hoverColorTextBtns('.footer__btns_record', '#ffffff', '#000000')

    hoverBgBtns('.footer__btns_online', 'rgb(191 56 121)', 'linear-gradient(90deg, rgba(56, 112, 255, 0.5) 2.8%, rgb(248, 169, 177) 100%)')
    hoverColorTextBtns('.footer__btns_online', '#ffffff', '#000000')

    hoverBgBtns('.modal__header__contact__record', 'rgb(191 56 121)', 'linear-gradient(90deg, rgb(231, 135, 181) 2.8%, rgb(248, 169, 177) 100%)')
    hoverColorTextBtns('.modal__header__contact__record', '#ffffff', '#000000')


    hoverBtnsSvg({
        btnSelector: '.footer__social__item_laser',
        iconSelector: '.footer-social-laser',
        btnColorBefore: "#F8A9B1",
        btnColorAfter: 'transparent',
        iconColorBefore: `fill: #ffffff`,
        iconColorAfter: 'fill:#F8A9B1'
    })

    hoverBtnsSvg({
        btnSelector: '.footer__social__item_vk',
        iconSelector: '.footer-social-vk',
        btnColorBefore: "#F8A9B1",
        btnColorAfter: 'transparent',
        iconColorBefore: `fill: #ffffff`,
        iconColorAfter: 'fill:#F8A9B1'
    })

    hoverBtnsSvg({
        btnSelector: '.footer__social__item_youtube',
        iconSelector: '.footer-social-youtube',
        btnColorBefore: "#F8A9B1",
        btnColorAfter: 'transparent',
        iconColorBefore: `fill: #ffffff`,
        iconColorAfter: 'fill:#F8A9B1'
    })

    hoverBtnsSvg({
        btnSelector: '.footer__social__item_telegram',
        iconSelector: '.footer-social-telegram',
        btnColorBefore: "#F8A9B1",
        btnColorAfter: 'transparent',
        iconColorBefore: `fill: #ffffff`,
        iconColorAfter: 'fill:#F8A9B1'
    })

}

export default hoverHeaderFooter()