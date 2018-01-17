import axios from 'axios';
import { URL } from './config/config'
import { getUserToken } from './helpers/auth';

export async function getCards(params = '') {
        const req = await axios({
            url : URL + '/posts' + params,
            method : 'GET',
            headers : {
                "X-Access-Token" : getUserToken()
            }
        })
        return req.data
}


