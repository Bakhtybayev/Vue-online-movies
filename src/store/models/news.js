import moviesService from "../../api/services/moviesService.js";

export default {
	actions: {
		async getMovies({commit, state, mutations}, page) {
			commit('toggleIsFetching', true)
			const res = await moviesService.getMoviesList(page);
			commit('updateMovies', res.results);
			commit('updateCurrentPage', page);
			commit('updateTotalMoviesCount', res.total_pages)
			commit('toggleIsFetching', false);
		},
		async getMovie({commit, getters, state}, movieId) {
			commit('toggleIsFetching', true)
			const res = await moviesService.getMovieById(movieId);
			getters.oneMovie(res);

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
		updateCurrentPage(state, payload) {
			state.currentPage = payload;
		},
		updateTotalMoviesCount(state, payload) {
			state.totalMoviesCount = payload;
		}
	},
	state: {
		movies: [],
		movie: null,
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
		getPageMoviesCount(state) {
			return state.pageMoviesCount;
		},
		getTotalMoviesCount(state) {
			return state.totalMoviesCount;
		}
	}
}