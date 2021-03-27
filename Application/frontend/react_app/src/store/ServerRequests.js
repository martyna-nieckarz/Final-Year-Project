import axios from 'axios';

import * as settings from '../settings';

export const getUserDetails = () => {
    console.log("Getting user details")
    var token = localStorage.getItem('token');

    return axios.post(`${settings.API_SERVER}/api/auth/getUserDetails/`, {
    }, {
        headers: {
            'Authorization': "Token " +token 
        }
    })
}