import moviesService from "../../api/services/moviesService.js";

export default {
	actions: {
		async getMovies({commit}, page) {
			commit('toggleIsFetching', true)
			const res = await moviesService.getMoviesList(page);
			commit('updateMovies', res.results);
			commit('updateTotalPages', res.total_pages);
			commit('updateCurrentPage', page);
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
		},
		updateMovie(state, payload) {
			state.movie = payload;
		},
		toggleIsFetching(state, payload) {
			state.isFetching = payload;
		},
		updateTotalPages(state, payload) {
			state.totalMoviesCount = payload;
		},
		updateCurrentPage(state, payload) {
			state.currentPage = payload;
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
			return state.movies;
		},
		oneMovie(state) {
			return state.movie;
		},
		toggleFetching(state) {
			return state.isFetching;
		},
		getCurrentPage(state) {
			return state.currentPage;
		},
		getTotalMoviesCount(state) {
			return state.totalMoviesCount
		},
		getPageMoviesCount(state) {
			return state.pageMoviesCount;
		}
	}
}