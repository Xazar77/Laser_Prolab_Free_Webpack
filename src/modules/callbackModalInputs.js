


const callbackModalInputs = () => {

    const inputs = document.querySelectorAll('.form__input') 
    const spanText =  document.querySelectorAll('.label-form-main')
    const form = document.getElementById('#form-callback')
    
    inputs.forEach((input, i) => {
        input.addEventListener('focus', () => {
            
            spanText[i].style.bottom = '35px'
        })
        input.addEventListener('blur', () => {
            if(input.value === '') {

                spanText[i].style.bottom = ''
            }
        })
    })



    const validNameField = (selector) => {
        
        const inputName = document.querySelector(selector)


        if( inputName && inputName.value === ''){
            inputName.addEventListener('focus', () => {
                inputName.style.borderBottom = `1px solid red`
            })
        }
        inputName.addEventListener('input', (e) => {
            inputName.value = e.target.value.replace(/[^а-я,ё,\ ]/gi, '')
            const borderColor = inputName.value === ''? 'red': 'green'
            inputName.style.borderBottom = `1px solid ${borderColor}`
        })

        inputName.addEventListener('change', () => {

            inputName.value = inputName.value.split(' ').map(word => {
                return (word[0].toUpperCase() + word.substring(1))
            })
            inputName.value = inputName.value.replace(/\,/g, '  ')
            console.log(inputName.value)
        })

        inputName.addEventListener('focus', () => {
            if(inputName.value === ''){
                inputName.style.borderBottom = `1px solid red`
            } else {
                inputName.style.borderBottom = `1px solid green`
            }
        })
        
        

    }
    validNameField('#main_name')



    const validPhoneField = (selector) =>{

        const inputPhone = document.querySelector(selector)


            let keyCode;
            
            
            function mask(event) {
                event.keyCode && (keyCode = event.keyCode);
                let pos = this.selectionStart;
                if (pos < 3) event.preventDefault();
                let matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    
                    return i < val.length ? val.charAt(i++) : a
                });
                i = new_value.indexOf("_");

                
                if (i != -1) {
                    i < 5 && (i = 3);
                    new_value = new_value.slice(0, i)
                    
                }
                let reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
                
                reg = new RegExp("^" + reg + "$");
                
                if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                    this.value = new_value;
                    if(this.value.length < 16) {
                        inputPhone.style.borderBottom = '1px solid red'
                        inputPhone.classList.remove('success')
                    } else {
                        
                        inputPhone.classList.add('success')
                        inputPhone.style.borderBottom = '1px solid green'
                    }
                } else {
                    inputPhone.style.borderBottom = '1px solid red'
                    inputPhone.classList.remove('success')
                }
                if (event.type == "blur" && this.value.length < 5) {
                    this.value = "";
                    
                }
                // console.log(pos)
    

            }
            
            inputPhone.addEventListener("input",  mask, false);
            inputPhone.addEventListener("focus", mask, false);
            inputPhone.addEventListener("blur",  mask, false);
            inputPhone.addEventListener("keydown", mask, false);

            // inputPhone.addEventListener('focus', () => {
            //     if(inputPhone.value.length < 16){
                    
            //         inputPhone.style.borderBottom = `1px solid red`
            //     } else if(inputPhone.value.length === 3) {
            //         console.log('dff')
            //         inputPhone.style.borderBottom = `1px solid #000`
            //     }
            // })
            // inputPhone.addEventListener('blur', (e) => {
            //     if(e.selectionStart == 3) {
            //         document.getElementById('content-name-mform2').style.bottom = ''
            //         console.log('ffff')
            //     }

            // })


    }
    validPhoneField('#main_phone')



    // const validEmailField = (selector) => {
    //     const testEmail = /^([a-z0-9\_\ \.\~\*\']+)(@{1})([a-z]+)(\.)(\w{2,3})$/gi
    //     const inputEmail = document.querySelector(selector)
        

        
    //         inputEmail.addEventListener('focus', () => {
    //             if(inputEmail.value === ''){
    //                 inputEmail.style.borderBottom = `1px solid red`
    //             }
    //         })
        

    //     inputEmail.addEventListener('input', (e) => {
    //         inputEmail.value = e.target.value.replace(/[^a-z0-9\_\ \.\~\*\'@]/gi, '')
    //         if(e.target.value.match(testEmail) !== null) {
    //             inputEmail.value = e.target.value
    //             inputEmail.style.borderBottom = '1px solid green'

    //         } else {
    //             inputEmail.style.borderBottom = '1px solid red' 
    //         }
    //     })
        
        
    // }
    // validEmailField('#main_email')
   
}

export default callbackModalInputs()