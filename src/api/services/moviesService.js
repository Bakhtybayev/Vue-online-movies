import instance from "../apiConfig";

//api endpoints

//api requests
const moviesService = {
   async getMoviesList(page) {
      const response = await instance.get(`movie/popular?api_key=64dd5fbe2a0241ba5b8c174482243af2&language=en-US&page=${page}`);
      return response.data;
   },
   async getMovieById(movieId) {
      const response = await instance.get(`movie/${movieId}?api_key=64dd5fbe2a0241ba5b8c174482243af2&language=en-US`);
		return response.data;
   }
}


export default moviesService;