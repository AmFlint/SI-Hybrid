import axios from 'axios';
import { URL } from './config/config'
import { getUserToken } from './helpers/auth';
function getCards() {
        axios({
            url : URL + '/posts',
            method : 'GET',
            headers : {
                "X-Access-Token" : getUserToken()
            }
        })

}


