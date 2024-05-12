

const optionallyText = () => {
    const text = document.querySelector('.laser__services__descr_optionally')
    if(text){

        const words = text.textContent
        const blockWords = words.substring(0, 150)
        text.textContent = words.length > 150? blockWords + " . . .": words
    }
}
export default optionallyText()