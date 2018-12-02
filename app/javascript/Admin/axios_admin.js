import axios from 'axios';

const instance = axios.create({
  baseURL: '',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default instance;
