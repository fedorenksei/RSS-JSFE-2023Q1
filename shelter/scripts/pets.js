/*
TODO

Логика для слайдера
    4. при изменении экрана:
        а) easy: либо просто заново формировать страницу и забывать состояние
        б) hard: либо добавлять/убавлять элементы на текущей и предыдущей странице

Логика для пагинации
    1. формировать весь массив под разные размеры экрана
*/

import petsData from './pets-data.json' assert {type: 'json'}

class Card {
    constructor(petNum) {
        this.data = petsData[petNum]
        
        this.cardElem = this._createCard()
    }

    get element() {
        return this.cardElem
    }

    _createCard() {
        const petName = this.data.name

        const card = document.createElement('div')
        card.classList.add('pet-card')
        card.addEventListener('click', this.openPopUp.bind(this))
    
        const image = document.createElement('img')
        image.src = './assets/images/pets/pets-' + this.data.img
        image.alt = `${petName}'s photo`
    
        const title = document.createElement('p')
        title.classList.add('pet-card__name')
        title.innerText = petName
        
        const button = document.createElement('div')
        button.classList.add('button_hollow')
        button.innerText = 'Learn more'
    
        card.append(image, title, button)
    
        return card
    }

    _createPopUp() {
        const data = this.data
        const bg = document.querySelector('.popup__bg')

        const card = document.querySelector('.popup__card')

        const image = bg.querySelector('img')
        image.src = './assets/images/pets-popup/' + data.img
        image.alt = `${data.name}'s photo`

        const dataToSet = {
            name: data.name,
            type: `${data.type} - ${data.breed}`,
            description: data.description,
            age: data.age,
            inoculations: data.inoculations.join(', '),
            diseases: data.diseases.join(', '),
            parasites: data.parasites.join(', ')
        }
        for (const prop in dataToSet) {
            bg.querySelector(`.popup__${prop}`).innerText = dataToSet[prop]
        }
    }

    openPopUp(event) {
        const bg = document.querySelector('.popup__bg')

        setTimeout(() => {bg.classList.add('popup__bg_active')})
        
        bg.addEventListener('click', this.closePopUp.bind(this))

        this._createPopUp()
    }

    closePopUp(event) {
        const bg = document.querySelector('.popup__bg')
        bg.querySelector('.popup__img').src = ''

        if (event.target !== bg 
            && !document.querySelector('[data-button="close-popup"]').contains(event.target)
        ) return

        bg.classList.remove('popup__bg_active')
    }
}

export const Pets = new class {
    constructor() {
    }
    get amount() {
        return petsData.length
    }
    getCard(petNum) {
        const card = new Card(petNum)
        return card.element
    }
    getCards(petNums) {
        return petNums.map(num => this.getCard(num))
    }
}

