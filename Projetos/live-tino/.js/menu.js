// Pegar o elemento sanduiche do HTML
const sanduiche = document.querySelector('.sanduice')
const navMenu = document.querySelector('.nav-menu')


sanduiche;addEventListener('click', () => {
    sanduiche.classList.toggle('active');
    navMenu.classList.toggle('active');
})