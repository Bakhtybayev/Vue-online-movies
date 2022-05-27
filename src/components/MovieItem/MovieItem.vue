<template>
	<div class="__movie-item-block">
		<img :src="avatarUrl" alt="" class="__movie-item-avatar">
		<div class="__movie-item-information">
			<div class="__movie-item-title">
				{{ movie.title }}
			</div>
			<div class="__movie-item-date-genres-runtime">
				<span class="__movie-item-date">{{ movie.release_date }} -</span>
				<span class="__movie-item-genres" v-for="(genre, index) of movie.genres" :key="index">{{ genre.name
				}}</span>
				<span class="__movie-item-runtime">- {{ movie.runtime }}м</span>
			</div>
			<div class="__movie-item-average">
				<span>Raiting of the film</span> <span>{{ movie.vote_average }}</span>
			</div>
			<div class="__movie-item-tagline">
				{{ movie.tagline }}
			</div>
			<div class="__movie-item-status">
				{{ movie.status }}
			</div>
			<div class="__movie-item-overview">
				{{ movie.overview }}
			</div>
			<div class="__movie-item-budget">
				<span class="__movie-item-average-shrift">Total budget</span>
				<hr>
				<span class="__movie-item-budget-count">{{ movie.budget }}</span>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: "MovieItem",
	data() {
		return {
			avatarUrl: "https://image.tmdb.org/t/p/w500" + this.movie.poster_path
		}
	},
	props: {
		movie: Object,
	},
	created() {
		console.log(this.movie)
	}
}

</script>

<style scoped>
.__movie-item-block {
	box-shadow: 0 0 30px rgba(14, 26, 131, 0.699);
	margin: 30px auto;
	width: 1260px;
	display: flex;
	padding: 50px;
}

.__movie-item-avatar {
	width: 350px;
	height: 500px;
	margin: 10px 20px 0 0;
	border-radius: 5px;
}

.__movie-item-information {
	margin: 10px 0 0 10px;
}

.__movie-item-title {
	font-weight: 550;
	font-size: 35px;
	padding: 2px;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.__movie-item-date {
	padding: 2px;
	margin: 0 5px 0 0;
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.__movie-item-genre {
	cursor: pointer;
	color: rgba(219, 55, 55, 0.863);
	padding: 2px;
	margin: 0 5px 0 0;
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.__movie-item-runtime {
	padding: 2px;
	margin: 0 5px 0 0;
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.__movie-item-average {
	margin: 20px 0 20px 2px;
}

.__movie-item-average-shrift {
	cursor: pointer;
	border: 1px solid rgb(26, 24, 24);
	border-radius: 10px;
	background-color: rgba(29, 27, 27, 0.89);
	padding: 7px;
	text-align: center;
	font-weight: 600;
	color: wheat;
	font-size: 25px;
}

hr {
	border: 0.3px solid rgba(46, 43, 45, 0.911);
	width: 15px;
	height: 0.1px;
	margin: 0 0 0 17px;
	background-color: rgba(46, 43, 45, 0.911);
}

.__movie-item-tagline {
	margin: 0 0 10px 3px;
	font-style: italic;
	font-size: 20px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.__movie-item-status {
	margin: 20px 0 15px 3px;
	font-weight: 500;
	font-size: 25px;
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.__movie-item-overview {
	padding: 5px;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	margin: 20px 0 8px 3px;
	font-size: 19px;
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.__movie-item-budget {
	margin: 30px 0 0 3px;
	display: flex;
	align-items: center;
}

.__movie-item-budget-count {
	font-size: 27px;
	margin-left: 13px;
}

/* Media for (MOBILE) */
@media (max-width: 1280px) {
	.__movie-item-block {
		margin: 30px auto;
		width: 1150px;
		padding: 40px;
	}

	.__movie-item-avatar {
		width: 350px;
		height: 500px;
		margin: 10px 20px 0 0;
	}

	.__movie-item-information {
		margin: 10px 0 0 10px;
	}

	.__movie-item-title {
		font-weight: 550;
		font-size: 35px;
	}

	.__movie-item-date {
		margin: 0 5px 0 0;
	}

	.__movie-item-genre {
		margin: 0 5px 0 0;
	}

	.__movie-item-runtime {
		margin: 0 5px 0 0;
	}

	.__movie-item-average {
		margin: 20px 0 20px 2px;
	}

	/* no comment */
	.__movie-item-average-shrift {
		padding: 7px;
		font-size: 25px;
	}

	hr {
		width: 15px;
		margin: 0 0 0 17px;
	}

	.__movie-item-tagline {
		margin: 0 0 10px 3px;
		font-size: 20px;
	}

	.__movie-item-status {
		margin: 20px 0 15px 3px;
		font-size: 25px;
	}

	.__movie-item-overview {
		padding: 5px;
		margin: 20px 0 8px 3px;
		font-size: 19px;
	}

	.__movie-item-budget {
		margin: 30px 0 0 3px;
	}

	.__movie-item-budget-count {
		font-size: 27px;
		margin-left: 13px;
	}
}

@media (max-width: 1024px) {
	.__movie-item-block {
		margin: 0 auto;
		width: 960px;
		padding: 15px;
	}

	.__movie-item-avatar {
		width: 350px;
		height: 500px;
		margin: 10px 20px 0 0;
	}

	.__movie-item-information {
		margin: 10px 0 0 10px;
	}

	.__movie-item-title {
		font-weight: 550;
		font-size: 35px;
	}

	.__movie-item-date {
		margin: 0 5px 0 0;
	}

	.__movie-item-genre {
		margin: 0 5px 0 0;
	}

	.__movie-item-runtime {
		margin: 0 5px 0 0;
	}

	.__movie-item-average {
		margin: 20px 0 20px 2px;
	}

	/* no comment */
	.__movie-item-average-shrift {
		padding: 7px;
		font-size: 25px;
	}

	hr {
		width: 15px;
		margin: 0 0 0 17px;
	}

	.__movie-item-tagline {
		margin: 0 0 10px 3px;
		font-size: 20px;
	}

	.__movie-item-status {
		margin: 20px 0 15px 3px;
		font-size: 25px;
	}

	.__movie-item-overview {
		padding: 5px;
		margin: 20px 0 8px 3px;
		font-size: 19px;
	}

	.__movie-item-budget {
		margin: 30px 0 0 3px;
	}

	.__movie-item-budget-count {
		font-size: 27px;
		margin-left: 13px;
	}
}

/* Ipad(Pro) /Mini*/
@media (max-width: 820px) {
	.__movie-item-block {
		display: block;
		margin: 10px auto;
		width: 740px;
		padding: 10px;
	}

	.__movie-item-avatar {
		width: 580px;
		height: 600px;
		margin: 0 0 0 100px;
	}

	.__movie-item-information {
		margin: 10px 0 0 10px;
	}

	.__movie-item-title {
		font-weight: 550;
		font-size: 35px;
	}

	.__movie-item-date {
		margin: 0 5px 0 0;
	}

	.__movie-item-genre {
		margin: 0 5px 0 0;
	}

	.__movie-item-runtime {
		margin: 0 5px 0 0;
	}

	.__movie-item-average {
		margin: 20px 0 20px 2px;
	}

	/* no comment */
	.__movie-item-average-shrift {
		padding: 7px;
		font-size: 25px;
	}

	hr {
		width: 15px;
		margin: 0 0 0 17px;
	}

	.__movie-item-tagline {
		margin: 0 0 10px 3px;
		font-size: 20px;
	}

	.__movie-item-status {
		margin: 20px 0 15px 3px;
		font-size: 25px;
	}

	.__movie-item-overview {
		padding: 5px;
		margin: 20px 0 8px 3px;
		font-size: 19px;
	}

	.__movie-item-budget {
		margin: 30px 0 0 3px;
	}

	.__movie-item-budget-count {
		font-size: 27px;
		margin-left: 13px;
	}
}

@media (max-width: 912px) {
	.__movie-item-block {
		display: block;
		margin: 10px auto;
		width: 740px;
		padding: 10px;
	}

	.__movie-item-avatar {
		width: 580px;
		height: 600px;
		margin: 0 0 0 100px;
	}

	.__movie-item-information {
		margin: 10px 0 0 10px;
	}

	.__movie-item-title {
		font-weight: 550;
		font-size: 35px;
	}

	.__movie-item-date {
		margin: 0 5px 0 0;
	}

	.__movie-item-genre {
		margin: 0 5px 0 0;
	}

	.__movie-item-runtime {
		margin: 0 5px 0 0;
	}

	.__movie-item-average {
		margin: 20px 0 20px 2px;
	}

	/* no comment */
	.__movie-item-average-shrift {
		padding: 7px;
		font-size: 25px;
	}

	hr {
		width: 15px;
		margin: 0 0 0 17px;
	}

	.__movie-item-tagline {
		margin: 0 0 10px 3px;
		font-size: 20px;
	}

	.__movie-item-status {
		margin: 20px 0 15px 3px;
		font-size: 25px;
	}

	.__movie-item-overview {
		padding: 5px;
		margin: 20px 0 8px 3px;
		font-size: 19px;
	}

	.__movie-item-budget {
		margin: 30px 0 0 3px;
	}

	.__movie-item-budget-count {
		font-size: 27px;
		margin-left: 13px;
	}
}

@media (max-width: 540px) {
	.__movie-item-block {
		display: block;
		margin: 10px auto;
		width: 510px;
		padding: 10px;
	}

	.__movie-item-avatar {
		width: 450px;
		height: 450px;
		margin: 0 0 0 30px;
	}

	.__movie-item-information {
		margin: 5px 0 0 10px;
	}

	.__movie-item-title {
		font-weight: 600;
		font-size: 35px;
	}

	.__movie-item-date {
		margin: 0 2px 0 0;
	}

	.__movie-item-genre {
		margin: 0 2px 0 0;
	}

	.__movie-item-runtime {
		margin: 0 2px 0 0;
	}

	.__movie-item-average {
		margin: 5px 0 5px 2px;
	}

	/* no comment */
	.__movie-item-average-shrift {
		padding: 5px;
		font-size: 25px;
	}

	hr {
		width: 15px;
		margin: 0 0 0 17px;
	}

	.__movie-item-tagline {
		margin: 0 0 5px 3px;
		font-size: 20px;
	}

	.__movie-item-status {
		margin: 10px 0 15px 3px;
		font-size: 25px;
	}

	.__movie-item-overview {
		padding: 5px;
		margin: 10px 0 8px 3px;
		font-size: 19px;
	}

	.__movie-item-budget {
		margin: 10px 0 0 3px;
	}

	.__movie-item-budget-count {
		font-size: 27px;
		margin-left: 13px;
	}
}

/* iphone (6/7/8/Plus/XR/390PRO/S20ULTRA/A51) */
@media (max-width: 414px) {
	.__movie-item-block {
		display: block;
		margin: 10px auto;
		width: 400px;
		padding: 5px;
	}

	.__movie-item-avatar {
		width: 350px;
		height: 350px;
		margin: 0 0 0 25px;
	}

	.__movie-item-information {
		margin: 5px 0 0 5px;
	}

	.__movie-item-title {
		font-weight: 600;
		font-size: 30px;
	}

	.__movie-item-date {
		margin: 0 2px 0 0;
	}

	.__movie-item-genre {
		margin: 0 2px 0 0;
	}

	.__movie-item-runtime {
		margin: 0 2px 0 0;
	}

	.__movie-item-average {
		margin: 2px 0 2px 2px;
	}

	/* no comment */
	.__movie-item-average-shrift {
		padding: 2px;
		font-size: 20px;
	}

	hr {
		width: 7px;
		margin: 0 0 0 7px;
	}

	.__movie-item-tagline {
		margin: 0 0 2px 3px;
		font-size: 18px;
	}

	.__movie-item-status {
		margin: 5px 0 5px 3px;
		font-size: 20px;
	}

	.__movie-item-overview {
		padding: 2px;
		margin: 5px 0 5px 3px;
		font-size: 18px;
	}

	.__movie-item-budget {
		margin: 5px 0 0 3px;
	}

	.__movie-item-budget-count {
		font-size: 20px;
		margin-left: 3px;
	}
}

/* iphone (6/7/8/SE/S8360) */
@media (max-width: 375px) {
	.__movie-item-block {
		display: block;
		margin: 10px auto;
		width: 340px;
		padding: 5px;
	}

	.__movie-item-avatar {
		width: 320px;
		height: 320px;
		margin: 0 0 0 10px;
	}

	.__movie-item-information {
		margin: 5px 0 0 1px;
	}

	.__movie-item-title {
		font-weight: 600;
		font-size: 30px;
	}

	.__movie-item-date {
		margin: 0 2px 0 0;
	}

	.__movie-item-genre {
		margin: 0 2px 0 0;
	}

	.__movie-item-runtime {
		margin: 0 2px 0 0;
	}

	.__movie-item-average {
		margin: 2px 0 2px 2px;
	}

	/* no comment */
	.__movie-item-average-shrift {
		padding: 2px;
		font-size: 20px;
	}

	hr {
		width: 7px;
		margin: 0 0 0 7px;
	}

	.__movie-item-tagline {
		margin: 0 0 2px 3px;
		font-size: 18px;
	}

	.__movie-item-status {
		margin: 5px 0 5px 3px;
		font-size: 20px;
	}

	.__movie-item-overview {
		padding: 2px;
		margin: 5px 0 5px 3px;
		font-size: 18px;
	}

	.__movie-item-budget {
		margin: 5px 0 0 3px;
	}

	.__movie-item-budget-count {
		font-size: 20px;
		margin-left: 3px;
	}
}

@media (max-width: 280px) {
	.__movie-item-block {
		display: block;
		margin: 5px auto;
		width: 265px;
		padding: 5px;
	}

	.__movie-item-avatar {
		width: 230px;
		height: 230px;
		margin: 0 0 0 17px;
	}

	.__movie-item-information {
		margin: 1px 0 0 1px;
	}

	.__movie-item-title {
		font-weight: 500;
		font-size: 25px;
	}

	.__movie-item-date {
		margin: 0 0.2px 0 0;
		font-size: 15px;
	}

	.__movie-item-genre {
		margin: 0 0.2px 0 0;
		font-size: 15px;
	}

	.__movie-item-runtime {
		margin: 0 0.2px 0 0;
		font-size: 15px;
	}

	.__movie-item-average {
		margin: 2px 0 0.2px 2px;
	}

	/* no comment */
	.__movie-item-average-shrift {
		padding: 2px;
		font-size: 18px;
	}

	hr {
		width: 5px;
		margin: 0 0 0 3px;
	}

	.__movie-item-tagline {
		margin: 1px 0 1px 1px;
		font-size: 15px;
	}

	.__movie-item-status {
		margin: 2px 0 2px 2px;
		font-size: 18px;
	}

	.__movie-item-overview {
		padding: 2px;
		margin: 2px 0 2px 2px;
		font-size: 16px;
	}

	.__movie-item-budget {
		margin: 5px 0 0 2px;
	}

	.__movie-item-budget-count {
		font-size: 18px;
		margin-left: 2px;
	}
}
</style>