import axios from 'axios';


export const getUserDetails = () => {
    console.log("Getting user details")
    var token = localStorage.getItem('token');

    return axios.post("http://localhost:8000/api/auth/getUserDetails/", {
    }, {
        headers: {
            'Authorization': "Token " +token 
        }
    })
}