import axios from 'axios';
import apis from '../constants/APIs';

const helperAPI = {
    FetchGetAPI: function (url, body, token, callback) {
        let headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        axios.get(url, body, headers)
        .then((res) => {
            // response return 
            var result = res;
            callback(result);
        }).catch( (err) => { callback({ error: 'Not Found'}) });
    },

    FetchPostAPI: function (url, body, token, callback) {
        let headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        axios.post( url, body, headers)
        .then((res) => {
            // response return 
            var result = res;
            callback(result.data);
        }).catch ( (err) => { console.log('Error POST: ', err); });
    }
}

export default helperAPI;