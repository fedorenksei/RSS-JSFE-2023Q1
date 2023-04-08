const burgerIcon = document.querySelector('.burger-icon')
const nav = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav__item')
const bgShadow = document.querySelector('.bg-shadow')
const menuOpenedClass = 'nav_opened'

burgerIcon.addEventListener('click', toggleMenu)

function toggleMenu() {
    nav.classList.toggle(menuOpenedClass)
}


for (var element of [bgShadow, ...navLinks]) {
    element.addEventListener('click', closeMenu)
}

function closeMenu() {
    nav.classList.remove(menuOpenedClass)
}


const biggerScreenQuery = window.matchMedia('(min-width: 768px)')
biggerScreenQuery.addEventListener('change', (event) => {
    if (event.target.matches) closeMenu()
})