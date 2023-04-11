import {Pets} from './pets.js'
import {getRandomNum} from './random.js'

class Pages {
    constructor(elem) {
        this.slider = elem

        this.mediaMatches = {
            tablet: window.matchMedia('(min-width: 750px)'),
            desktop: window.matchMedia('(min-width: 1279px)'),
        }
        
        for (const query of [this.mediaMatches.tablet, this.mediaMatches.desktop]) {
            query.addEventListener('change', this.render.bind(this))
        }

        const buttons = this.slider.querySelectorAll('[data-button]')
        for (const button of buttons) {
            button.addEventListener('click', this.buttonListener.bind(this))
        }

        this.rowElem = this.slider.querySelector('.slider__row')
        this.pageNumberElem = this.slider.querySelector('[data-button="number"]')

        this.render()
    }

    buttonListener(event) {
        const button = event.target.closest('[data-button]')
        const meaning = button.dataset.button

        let pageNumber
        switch (meaning) {
            case 'number':
                return
            case 'first':
                this.pageNumber = 1
                this.activateButtons()
                break
            case 'previous':
                this.pageNumber = Math.max(1, this.pageNumber - 1)
                this.activateButtons()
                break
            case 'next': 
                this.pageNumber = Math.min(this.lastPageNumber, this.pageNumber + 1)
                this.activateButtons()
                break
            case 'last': 
                this.pageNumber = this.lastPageNumber
                this.activateButtons()
                break
        }

        this.scroll()
    }

    scroll() {
        let value
        if (this.pageNumber <= 1) {
            value = 'none'
        } else {
            value = `translate(-${this.pageNumber - 1}00%)`
        }
        this.rowElem.style.transform = value
        this.pageNumberElem.innerText = this.pageNumber
    }

    activateButtons() {
        const buttons = this.slider.querySelectorAll('.button_hollow_inactive')
        for (const button of buttons) {
            button.classList.remove('button_hollow_inactive')
        }

        let buttonsToDeactivate = []
        if (this.pageNumber == 1) {
            buttonsToDeactivate = this.slider.querySelectorAll('[data-button="first"], [data-button="previous"]')
        } else if (this.pageNumber == this.lastPageNumber) {
            buttonsToDeactivate = this.slider.querySelectorAll('[data-button="last"], [data-button="next"]')
        }
        for (const button of buttonsToDeactivate) {
            button.classList.add('button_hollow_inactive')
        }
    }

    getCardsAmount() {
        if (this.mediaMatches.desktop.matches) {
            return 8
        }
        if (this.mediaMatches.tablet.matches) {
            return 6
        }
        return 3
    }

    render() {
        const sets = getCoherentSets(8, this.getCardsAmount())
        this.rowElem = this.slider.querySelector('.pages__row')
        this.rowElem.replaceChildren()
        for (const set of sets) {
            this.rowElem.append(this.createPage(set))
        }
        this.pageNumber = 1
        this.lastPageNumber = Math.floor(48 / this.getCardsAmount())
        this.scroll()
    }

    createPage(cardNums) {
        const slide = document.createElement('div')
        slide.classList.add('page')
        slide.append(...Pets.getCards(cardNums))
        return slide
    }
}

const sliders = document.querySelectorAll('.pages')
sliders.forEach(elem => new Pages(elem))


function getCoherentSets(range, setLength, itemsAmount = 48) {
    if (setLength > range) return
    const setAmount = Math.floor(itemsAmount / setLength)
    let count = Array(range).fill(0)
    
    let result = []
    while (result.length < setAmount) {
        result.push(newSet())
    }
    
    function newSet() {
        let source = Array.from(Array(range).keys())
        source = source.filter(num => count[num] < setAmount)
        let set = []
        do {
            const index = Math.floor(Math.random() * source.length)
            const random = source[index]
            set.push(random)
            count[random]++
            source.splice(source.indexOf(random), 1)
        } while (set.length < setLength)
        return set
    }

    return result
}