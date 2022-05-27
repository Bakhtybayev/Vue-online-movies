import moviesService from "../../api/services/moviesService.js";

export default {
	actions: {
		async getMovies({commit}, page) {
			commit('toggleIsFetching', true)
			const res = await moviesService.getMoviesList(page);
			commit('updateMovies', res.results);
			console.log("Actions!")
			// 
			console.log('Results:', res.results);
			// 
			commit('updateTotalPages', res.total_pages);
			// 
			console.log('Total_Pages:', res.total_pages);
			// 
			commit('updateCurrentPage', page);
			// 
			console.log('CurrentPage:', page);
			// 
			commit('toggleIsFetching', false);
		},
		async getMovie({commit}, movieId) {
			commit('toggleIsFetching', true)
			const res = await moviesService.getMovieById(movieId);
			commit('updateMovie', res);
			commit('toggleIsFetching', false);
		}
	},
	mutations: {
		updateMovies(state, payload) {
			state.movies =  payload;
			console.log('UpdateMovies(MUT):', state.movies);
		},
		updateMovie(state, payload) {
			state.movie = payload;
		},
		toggleIsFetching(state, payload) {
			state.isFetching = payload;
		},
		updateTotalPages(state, payload) {
			state.totalMoviesCount = payload;
			console.log('TotalPages(MUT):', state.totalMoviesCount);
		},
		updateCurrentPage(state, payload) {
			state.currentPage = payload;
			console.log('CurrentPage(MUT):', state.currentPage);
		}
	},
	state: {
		movie: null,
		movies: [],
		isFetching: true,
		currentPage: 1,
		pageMoviesCount: 20,
		totalMoviesCount: null,
	},
	getters: {
		allMovies(state) {
			console.log('allMovies(GETTER):', state.movies);
			return state.movies;
		},
		oneMovie(state) {
			return state.movie;
		},
		toggleFetching(state) {
			return state.isFetching;
		},
		getCurrentPage(state) {
			console.log('CurrentPage(GETTER):', state.currentPage);
			return state.currentPage;
		},
		getTotalMoviesCount(state) {
			console.log('getTotalMoviesCount(GETTER):', state.totalMoviesCount);
			return state.totalMoviesCount
		},
		getPageMoviesCount(state) {
			return state.pageMoviesCount;
		}
	}
}