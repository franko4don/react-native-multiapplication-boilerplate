import axios from 'axios';
import settings from './../redux/config';

let config = {baseURL: settings.boiler.apiUrl,
  timeout: 1000,
  headers: {
    'Authorization' : `Bearer `
  }
};
let instance = axios.create(config);

export default instance;