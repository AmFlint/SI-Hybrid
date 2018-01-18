import '../styles/main.scss'
import axios from "axios";
import {URL} from "./config/config";
import {redirectTo} from "./helpers/redirect";
import {getUserToken} from "./helpers/auth";

let stars = document.querySelectorAll('.add__card--rate > i');

for (let i=0 ; i<stars.length; i++ ) {
    stars[i].addEventListener('touchstart', function () {
        for (let x=0 ; x<stars.length; x++ ) {
            stars[x].classList.remove('active');
        }
        for (let j=0; j<=i; j++) {
            stars[j].classList.add('active');
        }
    })
}

const form = document.querySelector('.submit__box');

form.addEventListener('submit', addCard);

function getLevel() {
    const level = document.querySelectorAll('.icon-star_rate_18px.active');
    return level.length
}

function addCard(e) {
    e.preventDefault();
    const placeName = window.document.querySelector('#placeName');
    const placeDrescription = window.document.querySelector('#placeDrescription');
    const placeAddress = window.document.querySelector('#placeAddress');
    const placeLevel = getLevel();
    if (!inputIsEmpty()) {
        axios({
            url : URL + '/posts',
            method : 'POST',
            data : {
                title : placeName.value,
                location : placeAddress.value,
                difficulty : placeLevel,
                content : placeDrescription.value,
            },
            headers : {
                "Access-Control-Allow-Origin":  "*",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
                "X-Access-Token" : getUserToken()
            }
        })
            .then((response) => {
                if (response.status === 200) {
                    redirectTo('home');
                }
            })
            .catch((err) => console.log(err.message))
    }
}

function inputIsEmpty() {
    if (typeof document !== "undefined") {
        const placeName = window.document.querySelector('#placeName');
        const placeDrescription = window.document.querySelector('#placeDrescription');
        const placeAddress = window.document.querySelector('#placeAddress');
        const placeLevel = getLevel();

        return !placeName.value.trim() && !placeDrescription.value.trim() && !placeAddress.value.trim() && !placeLevel.length > 0
    }
}