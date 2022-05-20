import axios from 'axios';

//axios init
const apiConfig = {
   baseUrl: 'https://api.themoviedb.org/3/',
}

const instance = axios.create({
   baseURL: apiConfig.baseUrl,
});


export default instance;