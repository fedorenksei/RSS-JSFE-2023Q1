import {Pets} from './pets.js'
import {getRandomNum} from './random.js'

class Slider {
    constructor(elem) {
        this.slider = elem

        this.mediaMatches = {
            tablet: window.matchMedia('(min-width: 750px)'),
            desktop: window.matchMedia('(min-width: 1100px)'),
        }

        for (const query of [this.mediaMatches.tablet, this.mediaMatches.desktop]) {
            query.addEventListener('change', this.render.bind(this))
        }

        const buttons = this.slider.querySelectorAll('[data-direction]')
        for (const button of buttons) {
            button.addEventListener('click', this.buttonListener.bind(this))
        }

        this.render()
    }

    render() {
        const initialSet = this.getSet()
        this.cardNumSets = {
            current: initialSet,
            right: this.getSet(initialSet),
            left: this.getSet(initialSet)
        }

        this.rowElem = this.slider.querySelector('.slider__row')
        this.rowElem.replaceChildren()
        this.rowElem.append(
            this.createSlide(this.cardNumSets.left), 
            this.createSlide(this.cardNumSets.current), 
            this.createSlide(this.cardNumSets.right)
        )
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
        const button = event.target.closest('[data-direction]')
        const direction = button.dataset.direction
        if (direction === 'right') {
            this.rowElem.classList.add('slider__row_slide-right')
            setTimeout(deleteFirstAddThird.bind(this), 700)
            // this.rowElem.addEventListener('transitionend', deleteFirstAddThird.bind(this))
        } else {
            this.rowElem.classList.add('slider__row_slide-left')
            setTimeout(addFirstDeleteThird.bind(this), 700)
            // this.rowElem.addEventListener('transitionend', addFirstDeleteThird.bind(this))
        }

        function deleteFirstAddThird() {
            this.rowElem.classList.remove('slider__row_slide-right')

            this.rowElem.firstElementChild.remove()
            const newSet = this.getSet(this.cardNumSets.right)
            this.rowElem.append(this.createSlide(newSet))
            
            this.cardNumSets.left = this.cardNumSets.current
            this.cardNumSets.current = this.cardNumSets.right
            this.cardNumSets.right = newSet
        }

        function addFirstDeleteThird() {
            this.rowElem.classList.remove('slider__row_slide-left')

            const newSet = this.getSet(this.cardNumSets.left)
            this.rowElem.prepend(this.createSlide(newSet))
            this.rowElem.lastElementChild.remove()

            this.cardNumSets.right = this.cardNumSets.current
            this.cardNumSets.current = this.cardNumSets.left
            this.cardNumSets.left = newSet
        }
    }

    createSlide(cardNums) {
        const slide = document.createElement('div')
        slide.classList.add('slider__slide')
        slide.append(...Pets.getCards(cardNums))
        return slide
    }

    getSet(apart) {
        const cardsAmount = (() => {
            if (this.mediaMatches.desktop.matches) {
                return 3
            }
            if (this.mediaMatches.tablet.matches) {
                return 2
            }
            return 1
        })()

        return getRandomNum(
            Pets.amount, 
            cardsAmount,
            apart
        )
    }
}

const sliders = document.querySelectorAll('.slider')
sliders.forEach(elem => new Slider(elem))