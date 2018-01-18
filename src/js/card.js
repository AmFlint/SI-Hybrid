import axios from 'axios';
import { URL } from './config/config'
import {getUserToken, removeUserToken} from './helpers/auth';
import {redirectTo} from "./helpers/redirect";

export async function getCards(params = '') {
        const req = await axios({
            url : URL + '/posts' + params,
            method : 'GET',
            headers : {
                "X-Access-Token" : getUserToken()
            }
        })
        .catch(err => {
            if (err) {
                removeUserToken();
                redirectTo('login');
            }
        });
        return req.data
}

export async function getCard(id) {
    const req = await axios({
        url : URL + '/posts/' + id,
        method : 'GET',
        headers : {
            "X-Access-Token" : getUserToken()
        }
    })
    return req.data
}


