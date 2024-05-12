const validateFields = () => {

    const form = document.querySelector('.form')

    if(form) {

        const validNameField = (selector) => {
            
            const inputName = document.querySelector(selector)


    
            if( inputName && inputName.value === ''){
                inputName.addEventListener('focus', () => {
                    inputName.style.border = `1px solid red`
                })
            }
            inputName.addEventListener('input', (e) => {
                inputName.value = e.target.value.replace(/[^а-я,ё,\ ]/gi, '')
                const borderColor = inputName.value === ''? 'red': 'green'
                inputName.style.border = `1px solid ${borderColor}`
            })
    
            inputName.addEventListener('change', () => {
    
                inputName.value = inputName.value.split(' ').map(word => {
                    return (word[0].toUpperCase() + word.substring(1))
                })
                inputName.value = inputName.value.replace(/\,/g, '  ')
                console.log(inputName.value)
            })

            inputName.addEventListener('focus', () => {
                console.log("error")
                if(inputName.value === ''){
                    inputName.style.border = `1px solid red`
                } else {
                    inputName.style.border = `1px solid green`
                }
            })
           
           
    
        }
        validNameField('#fio')
    
    
    
        const validPhoneField = (selector) =>{
            
            [].forEach.call( document.querySelectorAll(selector), (input) => {
                        
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
                            input.style.border = '1px solid red'
                            input.classList.remove('success')
                        } else {
        
                            input.classList.add('success')
                            input.style.border = '1px solid green'
                        }
                    } else {
                        input.style.border = '1px solid red'
                        input.classList.remove('success')
                    }
                    if (event.type == "blur" && this.value.length < 5) {
                        this.value = "";
                        
                    }
                }
            
                input.addEventListener("input",  mask, false);
                input.addEventListener("focus", mask, false);
                input.addEventListener("blur", mask, false);
                input.addEventListener("keydown", mask, false);

                input.addEventListener('focus', () => {
                    if(input.value.length < 16){
                        input.style.border = `1px solid red`
                    } 
                })
            
            });
    
        }
        validPhoneField('#phone')
    
    
    
        const validEmailField = (selector) => {
            const testEmail = /^([a-z0-9\_\ \.\~\*\']+)(@{1})([a-z]+)(\.)(\w{2,3})$/gi
            const inputEmail = document.querySelector(selector)
            
    
            
                inputEmail.addEventListener('focus', () => {
                    if(inputEmail.value === ''){
                        inputEmail.style.border = `1px solid red`
                    }
                })
            
    
            inputEmail.addEventListener('input', (e) => {
                inputEmail.value = e.target.value.replace(/[^a-z0-9\_\ \.\~\*\'@]/gi, '')
                if(e.target.value.match(testEmail) !== null) {
                    inputEmail.value = e.target.value
                    inputEmail.style.border = '1px solid green'
    
                } else {
                    inputEmail.style.border = '1px solid red' 
                }
            })
          
         
        }
        validEmailField('#email')
    }

}

export default validateFields()