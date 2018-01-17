import axios from 'axios';
import { URL } from './config/config'
import { getUserToken } from './helpers/auth';

export async function getCards() {
        const req = await axios({
            url : URL + '/posts',
            method : 'GET',
            headers : {
                "X-Access-Token" : getUserToken()
            }
        })
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


