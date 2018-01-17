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


