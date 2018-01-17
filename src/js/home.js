import '../styles/main.scss'
import axios from 'axios';
import { URL } from './config/config'
import { getUserToken } from './helpers/auth'
import { getCards } from './card'
import { renderCards } from './helpers/renderCards'

window.addEventListener('load', async function() {
    const listCards = document.querySelector('#listCards');
    const cards = await getCards()
    listCards.innerHTML = renderCards(cards)
})

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
    menuSearch = document.querySelector('.search'),
    buttonSearch = document.querySelector('#search_submit'),
    searchInput = document.querySelector('.search__bar__input');

function closeSearchTab() {
    menuSearch.classList.remove('search--active');
    menuSearch.classList.add('search--inactive');
}

searchIcon.addEventListener('click', function () {
    menuSearch.classList.remove('search--inactive');
    menuSearch.classList.add('search--active');
});
closeSearchIcon.addEventListener('click', closeSearchTab);

buttonSearch.addEventListener('click', async function() {
    let search = searchInput.value;
    if (search.trim() !== '') {
        const searchQuery = '?search=' + search;
        const cards = await getCards(searchQuery);
        listCards.innerHTML = renderCards(cards);
        searchInput.value = '';
        closeSearchTab();
    }
});