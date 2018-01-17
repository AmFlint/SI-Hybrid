import axios from 'axios';
import { URL } from './config/config'
import { getUserToken } from './helpers/auth';

export function getCards() {
        axios({
            url : URL + '/posts',
            method : 'GET',
            headers : {
                "X-Access-Token" : getUserToken()
            }
        })
        .then((response) => console.log(response, '???'))
}


