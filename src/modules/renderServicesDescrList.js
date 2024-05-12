

const renderServicesDescrList = () => {
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


    
    hoverBgBtns('.services__nav__btn', 'rgba(0,0,0, .2)', 'transparent')

    
    hoverBgBtns('.laser__services__descr_more', 'rgb(139, 139, 139)', 'transparent')
    hoverColorTextBtns('.laser__services__descr_more', '#ffffff', 'rgb(139, 139, 139)')

    hoverBgBtns('.laser__order__price_buy', 'rgb(191 56 121)', 'linear-gradient(90deg, rgb(231, 135, 181) 2.8%, rgb(248, 169, 177) 100%)')
    hoverColorTextBtns('.laser__order__price_buy', '#ffffff', '#000000')

    hoverBgBtns('.laser__order__price_instalment', 'rgb(191 56 121)', 'linear-gradient(90deg, rgba(56, 112, 255, 0.5) 2.8%, rgb(248, 169, 177) 100%)')
    hoverColorTextBtns('.laser__order__price_instalment', '#ffffff', '#000000')  
}
export  default renderServicesDescrList()