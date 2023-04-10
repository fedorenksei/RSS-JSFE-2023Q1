import {Pets} from './pets.js'

const Slider = new class {
    constructor() {
        const slider = document.querySelector('.slider')

        const firstSlide = this.createSlide(0, 1, 2)
        this.rowElem = slider.querySelector('.slider__row')
        this.rowElem.append(
            this.createSlide(3, 5, 6), 
            firstSlide,
            this.createSlide(4, 3, 7)
        )

        const buttons = slider.querySelectorAll('[data-direction]')
        for (const button of buttons) {
            button.addEventListener('click', this.buttonListener.bind(this))
        }
    }

    buttonListener(event) {
        /* 
        три слайда (сдвинуто на -100)
        - кнопка вправо:
            + сдвиг на -200
            + без анимации убрать первый слайд и вернуть на -100
            + добавить новый третий слайд
        - кнопка влево
            + сдвиг на 0
            + без анимации вставить новый первый слайд и вернуть на -100
         */

        const direction = event.target.dataset.direction
        if (direction === 'right') {
            this.rowElem.classList.add('slider__row_slide-right')
            setTimeout(deleteFirstAddThird.bind(this), 700)
        } else {
            this.rowElem.classList.add('slider__row_slide-left')
            setTimeout(addFirstDeleteThird.bind(this), 700)
        }

        function deleteFirstAddThird() {
            this.rowElem.classList.remove('slider__row_slide-right')
            this.rowElem.firstElementChild.remove()
            this.rowElem.append(this.createSlide(0, 0, 0))
        }

        function addFirstDeleteThird() {
            this.rowElem.classList.remove('slider__row_slide-left')
            this.rowElem.prepend(this.createSlide(1, 1, 1))
            this.rowElem.lastElementChild.remove()
        }
    }

    

    getNewCards() {

    }

    createSlide(...cardNums) {
        const slide = document.createElement('div')
        slide.classList.add('slider__slide')
        slide.append(...Pets.getCards(...cardNums))
        return slide
    }
}

