import '../styles/main.scss'
import { getCards } from './card'
getCards();
import { renderCards } from './helpers/renderCards'

window.addEventListener('load', async function() {
    const listCards = document.querySelector('#listCards');
    const cards = await getCards();
    listCards.innerHTML = renderCards(cards);
});

//js for tab
let items = document.querySelectorAll('.tabBar__list__item'),
    links = document.querySelectorAll('.tabBar__list__item > a');

for (let i = 0; i < items.length; i++) {
    links[i].addEventListener('click', function (e) {
        e.preventDefault();
    })
}


for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function () {
        for (let j = 0; j < items.length; j++) {
            items[j].classList.remove('items-tab-bar--active');
        }
        if (!this.classList.contains('items-tab-bar--active')){
            this.classList.add('items-tab-bar--active');
        }
    });
}

//js for search

let searchIcon = document.querySelector('.header__search__icon'),
    closeSearchIcon = document.querySelector('.search__bar__icon'),
    menuSearch = document.querySelector('.search');

searchIcon.addEventListener('click', function () {
    menuSearch.classList.remove('search--inactive');
    menuSearch.classList.add('search--active');
});
closeSearchIcon.addEventListener('click', function () {
    menuSearch.classList.remove('search--active');
    menuSearch.classList.add('search--inactive');
});