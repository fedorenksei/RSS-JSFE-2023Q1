import {Pets} from './pets.js'

const Slider = new class {
    constructor() {
        const slider = document.querySelector('.slider')

        const initialSet = getRandomNum(8, 3)
        this.cardNumSets = {
            current: initialSet,
            right: getRandomNum(8, 3, initialSet),
            left: getRandomNum(8, 3, initialSet)
        }

        this.rowElem = slider.querySelector('.slider__row')
        this.rowElem.append(
            this.createSlide(this.cardNumSets.left), 
            this.createSlide(this.cardNumSets.current), 
            this.createSlide(this.cardNumSets.right)
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
            const newSet = getRandomNum(8, 3, this.cardNumSets.right)
            this.rowElem.append(this.createSlide(newSet))
            debugger

            this.cardNumSets.left = this.cardNumSets.current
            this.cardNumSets.current = this.cardNumSets.right
            this.cardNumSets.right = newSet
            debugger
        }

        function addFirstDeleteThird() {
            this.rowElem.classList.remove('slider__row_slide-left')

            const newSet = getRandomNum(8, 3, this.cardNumSets.left)
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
}

function getRandomNum(range, take = 1, apart = []) {
    let source = Array.from(Array(range).keys())
    source = source.filter(el => !apart.includes(el))
    
    let result = []
    while (result.length < take && source.length > 0) {
        const index = Math.floor(Math.random() * source.length)
        result.push(source[index])
        source.splice(index, 1)
    }
    return result
}
// console.log(getRandomNum(range = 9))