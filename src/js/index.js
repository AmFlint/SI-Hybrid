import '../styles/main.scss'
import axios from 'axios';
import { URL } from './config/config'
import { saveUserToken, getUserToken } from './helpers/auth'
import { redirectTo } from './helpers/redirect';

const form = document.querySelector('.submit__box');

if (getUserToken()) {
    redirectTo('home');
}

form.addEventListener( 'submit' , signUp )


function signUp(e) {
    e.preventDefault();
    const userName = this.querySelector('#username');
    const email = this.querySelector('#email');
    const passwordVerification = this.querySelector('#password-verification');
    const password = this.querySelector('#password');
    if (validateSignupInputs(
        userName.value,
        email.value,
        password.value,
        passwordVerification.value)
    ) {
        axios({
            url : URL + '/signup',
            method : 'POST',
            data : {
                username: userName.value,
                email: email.value,
                password: password.value,
                passwordVerification: passwordVerification.value
            },
            headers : {
                "Access-Control-Allow-Origin":  "*",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Headers": "Content-Type, Authorization"
            }
        })
        .then((response) => {
            if (response.status == 200) {
                saveUserToken(response.data);
                redirectTo('home');
            }
        })
        .catch((err) => console.log(err))
    }
}

function inputIsEmpty(inputValue) {
        return inputValue.trim() === '';
}

function arePassWordsEqual(password, passwordVerification) {
    return password === passwordVerification;
}

function validateSignupInputs(username, email, password, passwordVerification) {
    const passwordVerif = arePassWordsEqual(password, passwordVerification);
    return !inputIsEmpty(username)
     && !inputIsEmpty(email)
     && !inputIsEmpty(password)
     && !inputIsEmpty(passwordVerification)
     && passwordVerif;
}

