import { LOGIN_UPDATE } from './types'
import boilerClient from './../../../rclient/boilerClient';
import config from './../../config';

export const loginUpdate = (payload) => {

    return {
        type: LOGIN_UPDATE,
        payload
    }
};

export const authenticate = (data) => {
    
    return (dispatch) => {

        boilerClient.post(config.boiler.apiUrl+'auth/login', data)
            .then(res => {
                
            })
            .catch(err => {
                
                
            })
      
    }
};
