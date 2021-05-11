import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-e09ab.cloudfunctions.net/api'
    //'http://localhost:5001/clone-e09ab/us-central1/api' // THE API (cloud function) URL
});

export default instance;
