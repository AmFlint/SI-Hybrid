import '../styles/main.scss'
import axios from 'axios';
import { URL } from './config/config'
const yay = 'yay'

const form = document.querySelector('.submit__box');

form.addEventListener( 'submit' , login )


function login(e) {
    e.preventDefault();
    const userName = this.querySelector('#userName');
    const password = this.querySelector('#password');
    if (!inputIsEmpty()) {
        axios({
            url : URL + '/login',
            method : 'POST',
            data : {
                username : userName.value,
                password : password.value
            },
            headers : {
                "Access-Control-Allow-Origin":  "*",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Headers": "Content-Type, Authorization"
            }
        })
        .then((response) => response.status === 200 ? saveUserLog(response.data) : console.log('error'))
        .catch((err) => console.log(err.message))
    }
}

function inputIsEmpty() {
    if (typeof document !== "undefined") {
        var userName = window.document.querySelector('#userName');
        var password = window.document.querySelector('#password');

        return !userName.value.trim() && !password.value.trim()
    }
}

function saveUserLog(value) {
    window.localStorage.setItem('logAuth', JSON.stringify(value.token))
}




