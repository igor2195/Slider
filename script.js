const btnUp = document.querySelector('.up-button')
const btnDown = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlide = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

btnUp.addEventListener('click', () => {
    changeSlide('up')
})

btnDown.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(str) {
    if(str === 'up'){
        activeSlide++
        if(activeSlide === slidesCount){
            activeSlide = 0
        }
    } else if(str === 'down') {
        activeSlide--
        if(activeSlide < 0) {
            activeSlide = slidesCount - 1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlide * height}px)`
    sidebar.style.transform = `translateY(${activeSlide * height}px)`
}

