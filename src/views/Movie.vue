<template>
	<div v-if="toggleFetching">
		<Preloader />
	</div>
	<h2 class="__movie-item-title" v-if="(!toggleFetching)"> <span class="__P">p</span>
		<span class="__O">o</span><span class="__P">p</span><span class="__U">u</span>
		<span class="__L">l</span><span class="__A">a</span><span class="__R">r</span> movie
	</h2>
	<MovieItem :movie="oneMovie" v-if="(!toggleFetching && oneMovie !== null)" />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import MovieItem from "@/components/MovieItem/MovieItem.vue";
import Preloader from '@/common/Preloader/Preloader.vue';

export default {
	name: "Movie",
	components: {
		MovieItem,
		Preloader
	},
	computed: {
		...mapGetters(["oneMovie", "toggleFetching"])
	},
	methods: mapActions(["getMovie"]),
	mounted() {
		const id = this.$route.params.movieId;
		this.getMovie(id);
	},
}

</script>

<style scoped>
.__movie-item-title {
	width: 1350px;
	margin: 10px auto;
	font-size: 50px;
	text-transform: uppercase;
	font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.__P {
	color: rgb(88, 50, 50);
	font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.__O {
	color: rgb(114, 114, 27);
	font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.__U {
	color: rgba(58, 45, 21, 0.897);
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.__L {
	color: rgb(151, 218, 240);
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.__A {
	color: rgb(62, 62, 104);
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.__R {
	color: purple;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

/* Media for (MOBILE) */
@media (max-width: 1280px) {
	.__movie-item-title {
		width: 1220px;
		margin: 10px auto;
		font-size: 50px;
	}
}

@media (max-width: 1024px) {
	.__movie-item-title {
		width: 990px;
		margin: 2px auto;
		font-size: 35px;
	}
}

/* Ipad(Pro) /Mini*/
@media (max-width: 820px) {
	.__movie-item-title {
		width: 730px;
		margin: 5px auto;
		font-size: 50px;
	}
}

@media (max-width: 912px) {
	.__movie-item-title {
		width: 730px;
		margin: 5px auto;
		font-size: 50px;
	}
}

@media (max-width: 540px) {
	.__movie-item-title {
		width: 520px;
		margin: 10px auto;
		font-size: 40px;
	}
}

/* iphone (6/7/8/Plus/XR/390PRO/S20ULTRA/A51) */
@media (max-width: 414px) {
	.__movie-item-title {
		width: 385px;
		margin: 10px auto;
		font-size: 30px;
	}
}

/* iphone (6/7/8/SE/S8360) */
@media (max-width: 375px) {
	.__movie-item-title {
		width: 350px;
		margin: 10px auto;
		font-size: 28px;
	}
}

@media (max-width: 280px) {
	.__movie-item-title {
		width: 270px;
		margin: 2px auto;
		font-size: 25px;
	}
}
</style>