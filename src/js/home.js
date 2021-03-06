import '../styles/main.scss'
import {getCards, getCard} from './card'
import axios from 'axios';
import {URL} from './config/config'
import {getUserToken, removeUserToken} from './helpers/auth'
import {renderCards} from './helpers/renderCards'
import {saveCardId} from './helpers/auth'
import { redirectTo } from './helpers/redirect';
import { getNotification, showNotification, deleteNotification } from './helpers/notification';

let cards = [];
const searchValue = '';
const floatingBtn = document.querySelector('.floating--button');

floatingBtn.addEventListener('click', function() {
    redirectTo('add-card');
});

const listCards = document.querySelector('#listCards');
window.addEventListener('load', async function () {

    cards = await getCards();
    console.log(cards);

    listCards.innerHTML = renderCards(cards);
    const Cards = document.querySelectorAll('.Cards');
    for (var i = 0; i < Cards.length; i++) {
        Cards[i].addEventListener('click', detailsCard);
    }
    const notification = getNotification();
    if (notification) {
        showNotification(notification, 'close', 2000);
        deleteNotification();
    }
});
//
// //js for tab
// let items = document.querySelectorAll('.tabBar__list__item'),
//     links = document.querySelectorAll('.tabBar__list__item > a');
//
// for (let i = 0; i < items.length; i++) {
//     links[i].addEventListener('click', function (e) {
//         e.preventDefault();
//     })
// }
//
//
// for (let i = 0; i < items.length; i++) {
//     items[i].addEventListener('click', function () {
//         for (let j = 0; j < items.length; j++) {
//             items[j].classList.remove('items-tab-bar--active');
//         }
//         if (!this.classList.contains('items-tab-bar--active')) {
//             this.classList.add('items-tab-bar--active');
//         }
//     });
// }

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
closeSearchIcon.addEventListener('click', function () {
    menuSearch.classList.remove('search--active');
    menuSearch.classList.add('search--inactive');
});

closeSearchIcon.addEventListener('click', closeSearchTab);

buttonSearch.addEventListener('click', async function () {
    let search = searchInput.value;
    if (search.trim() !== '') {
        const searchQuery = '?search=' + search;
        cards = await getCards(searchQuery);
        listCards.innerHTML = renderCards(cards);
        const Cards = document.querySelectorAll('.Cards');
        for (var i = 0; i < Cards.length; i++) {
            Cards[i].addEventListener('click', detailsCard)
        }
        searchInput.value = '';
        closeSearchTab();
    }
});


async function detailsCard() {
    const card = await getCard(this.dataset.id);
    listCards.innerHTML = '';
    window.scrollTo(0, 0);
    listCards.innerHTML = `
    <div class="one-card">
    <header class="article__header">
    <h1>${ card.title }</h1>
    <div id="goBack"><i class="icon-chevron_left_24px"></i></div>
</header>
<main class="article">
    <section class="article__carousel">
        <img src=""/>
    </section>
    <section class="article__head">
        <h2>${ card.title }</h2>
        <div class="article__headDetails">
            <p>Difficulté : ${ card.difficulty } </p>
            <p>2,32 km</p>
        </div>
    </section>
    <section class="article__main">
        <h3>Résumé</h3>
        <p class="article__mainDescription">${ card.content }</p>
    </section>
    <section>
        <h3>Lieu découvert par</h3>
        <div class="article__mainUser">
            <p>${ card.user.username }</p>
        </div>
    </section>
    <section class="article__map">
        <div id="map"></div>
    </section>
    </div>
    `;

    const backButton = document.querySelector('#goBack');

    if (backButton) {
        backButton.addEventListener('click', async function () {
            listCards.querySelector('.one-card').classList.add('no-card');
            setTimeout(() => {
                listCards.classList.add('no-opacity');
                setTimeout(() => {
                    listCards.innerHTML = '';
                listCards.classList.remove('no-opacity');
                listCards.innerHTML = renderCards(cards);
                const Cards = document.querySelectorAll('.Cards');
                for (var i = 0; i < Cards.length; i++) {
                    Cards[i].addEventListener('click', detailsCard);
                }
                }, 60);
            }, 600);
            
        })
    }
}