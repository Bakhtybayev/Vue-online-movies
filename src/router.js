import { createWebHistory, createRouter } from "vue-router";
import Movies from "@/views/Movies";
import Movie from "@/views/Movie";

const routes = [
	{
		path: '/',
		name: 'Movies',
		component: Movies
	},
	{
		path: '/movie/:movieId?',
		name: "Movie",
		component: Movie
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
 });
 
 export default router;