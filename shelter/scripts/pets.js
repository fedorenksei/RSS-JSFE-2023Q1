/*
TODO


Логика для слайдера
    4. при изменении экрана:
        а) easy: либо просто заново формировать страницу и забывать состояние
        б) hard: либо добавлять/убавлять элементы на текущей и предыдущей странице

Логика для пагинации
    1. формировать весь массив
    2. разбивать на страницы и показывать первую
    3. перелистывать на
        - следующую и предыдущую
        - первую и последнюю (деактивируя нужные кнопки)
        - в каждом случае менять номер страницы
    3. менять разбивку

Модуль медиа-запросов
    1. определить брейкпойнты + создать объекты запросов
    2. определять текущий вид экрана
    3. повесить куда-то листенер на изменение ширины
        - проверять поменялся ли тип экрана
        - если поменялся, перестраивать слайдер/пагинацию

*/

import petsData from './pets-data.json' assert {type: 'json'}

export const Pets = new class {
    get amount() {
        return petsData.length
    }
    getCard(petNum) {
        const petData = petsData[petNum]
        const petName = petData.name
    
        const card = document.createElement('div')
        card.classList.add('pet-card')
    
        const image = document.createElement('img')
        image.src = './assets/images/pets/pets-' + petData.img
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
    getCards(petNums) {
        return petNums.map(num => this.getCard(num))
    }
}
