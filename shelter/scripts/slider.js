import {Pets} from './pets.js'

const Slider = new class {
    constructor() {
        const slider = document.querySelector('.slider')
        this.rowElem = slider.querySelector('.slider__row')

        const slide = document.createElement('div')
        slide.classList.add('slider__slide')
        slide.append(...Pets.getCards(5, 1, 2))

        this.rowElem.appendChild(slide)
    }
}

