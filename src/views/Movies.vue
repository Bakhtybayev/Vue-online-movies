<template>
	<div v-if="toggleFetching">
		<Preloader/>
	</div>
	<h2 v-if="(!toggleFetching)"> <span class="__P">p</span><span class="__O">o</span><span class="__P">p</span><span class="__U">u</span><span class="__L">l</span><span class="__A">a</span><span class="__R">r</span> movies</h2>
	<div class="__movies-block" v-if="(!toggleFetching)">
		<div v-for="(movie, index) of allMovies" :key="index">
		<MoviesItem :id="movie.id"
		:avatar="movie.poster_path"
		:title="movie.title"
		:average="movie.vote_average"
		:date="movie.release_date"/>
	</div>
	</div>
	<div>
		<Pagination v-if="(!toggleFetching)"
		/>
	</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import MoviesItem from "@/components/MoviesItem/MoviesItem.vue";
import Pagination from '@/common/Pagination/Pagination.vue';
import Preloader from "@/common/Preloader/Preloader.vue";

export default {
  name: 'Movies',
  data() {
	  return {
		  page: 1
	  }
  },
  components: {
	  MoviesItem,
	  Pagination,
	  Preloader
  }, 
  computed: {
	  ...mapGetters(["allMovies"]),
	  ...mapGetters(["toggleFetching"]),
	  ...mapGetters(["getCurrentPage"]),
	  ...mapGetters(["getPageMoviesCount"]),
	  ...mapGetters(["getTotalMoviesCount"])
  },
  methods: {
	  ...mapActions(["getMovies"]),
	  handleGetMoviesPage(page) {
		  this.getMovies(page);
	  }
  },
  created() {

  },
	mounted() {
	 this.getMovies(this.page)
  },
}
</script>

<style scoped>
	.__movies-block {
		display: flex;
		width: 1160px;
		margin: 0 auto;
		flex-wrap: wrap;
	}
	h2 {
	width: 1120px;
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
/* Ipad(Pro) /Mini*/
@media (max-width: 1180px) {
	h2 {
		width: 550px;
		margin: 10px auto;
		font-size: 40px;
	}
	.__movies-block {
		display: flex;
		justify-content: space-evenly;
		width: 580px;
		margin: 0 auto;
		flex-wrap: wrap;
	}
} 

@media (max-width: 540px) {
	h2 {
		width: 500px;
		margin: 10px auto;
		font-size: 30px;
	}
	.__movies-block {
		display: flex;
		width: 520px;
		margin: 0 auto;
		flex-wrap: wrap;
	}
} 
/* iphone (6/7/8/Plus/XR/390PRO/S20ULTRA/A51) */
 @media (max-width: 414px) {
	h2 {
		width: 370px;
		margin: 10px auto;
		font-size: 30px;
	}
	.__movies-block {
		display: flex;
		width: 390px;
		margin: 0 auto;
		flex-wrap: wrap;
	}
} 

/* iphone (6/7/8/SE/S8360) */
 @media (max-width: 375px) {
	h2 {
		width: 300px;
		margin: 10px auto;
		font-size: 30px;
	}
	.__movies-block {
		display: flex;
		width: 330px;
		margin: 0 auto;
		flex-wrap: wrap;
	}
}

@media (max-width: 280px) {
	h2 {
		width: 250px;
		margin: 10px auto;
		font-size: 25px;
	}
	.__movies-block {
		display: flex;
		width: 278px;
		margin: 0 auto;
		flex-wrap: wrap;
	}
}
</style>