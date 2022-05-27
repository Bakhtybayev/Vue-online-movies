<template>
	<div v-on:click="navigateToMoviePage(id)" class="__movies-item-block">
		<img :src="avatarUrl" alt="" class="__movies-item-avatar">
		<div class="__movies-item-average">
			<span class="span-first">Raiting of the film</span> <span class="span-second">{{ average }}</span>
		</div>
		<hr>
		<div class="__movies-item-title">
			{{ title }}
		</div>
		<div class="__movies-item-date">
			{{ date }}
		</div>
	</div>
</template>

<script>
export default {
	name: "MoviesItem",
	data() {
		return {
			avatarUrl: "https://image.tmdb.org/t/p/w500" + this.avatar
		}
	},
	props: {
		id: Number,
		avatar: String,
		title: String,
		average: Number,
		date: String
	},
	created() {

	},
	methods: {
		navigateToMoviePage(id) {
			this.$router.push(`/movie/${id}`)
		}
	}
}
</script>

<style scoped>
.__movies-item-block {
	position: relative;
	text-align: center;
	width: 260px;
	height: 420px;
	margin: 20px 15px;
	box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
	border-radius: 10px;
	padding-bottom: 20px;
	text-decoration: none;
	cursor: pointer;
}

.__movies-item-avatar {
	width: 100%;
	height: 300px;
	border-radius: 3px;
}

.__movies-item-average {
	display: flex;
	justify-content: space-between;
	font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
	margin: 5px 0;
	font-size: 23px;
}

.span-first {
	margin-left: 10px;
	font-family: 'Times New Roman', Times, serif;
}

.span-second {
	margin-right: 10px;
}

.__movies-item-title {
	text-align: left;
	margin: 10px 0 0 10px;
	color: rgba(19, 18, 18, 0.925);
	font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
	font-weight: 400;
}

.__movies-item-date {
	position: absolute;
	bottom: 15px;
	text-align: left;
	margin: 10px 0 0 10px;
	color: rgba(128, 117, 117, 0.938);
	font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
	font-weight: 400;
}

/* Media for (MOBILE) */
@media (max-width: 540px) {
	.__movies-item-block {
		width: 250px;
		margin: 10px 5px;
		padding-bottom: 10px;
	}

	.__movies-item-avatar {
		width: 100%;
		height: 250px;
	}

	.__movies-item-average {
		margin: 3px 0 3px 5px;
		font-size: 20px;
	}

	.__movies-item-title {
		margin: 3px 0 3px 3px;
	}

	.__movies-item-date {
		margin: 3px 0 3px 3px;
	}
}

/* iphone (6/7/8/Plus/XR/390PRO/S20ULTRA/A51) */
@media (max-width: 414px) {
	.__movies-item-block {
		width: 180px;
		margin: 10px 3px;
		padding-bottom: 10px;
	}

	.__movies-item-avatar {
		width: 100%;
		height: 250px;
	}

	.__movies-item-average {
		margin: 3px 0 3px 5px;
		font-size: 20px;
	}

	.__movies-item-title {
		margin: 3px 0 3px 3px;
	}

	.__movies-item-date {
		margin: 3px 0 3px 3px;
	}
}

/* iphone (6/7/8/SE/S8360) */
@media (max-width: 375px) {
	.__movies-item-block {
		width: 150px;
		margin: 10px 3px;
		padding-bottom: 10px;
	}

	.__movies-item-avatar {
		width: 100%;
		height: 250px;
	}

	.__movies-item-average {
		margin: 3px 0 3px 3px;
		font-size: 18px;
	}

	.__movies-item-title {
		margin: 3px 0 3px 3px;
	}

	.__movies-item-date {
		margin: 3px 0 3px 3px;
	}
}

/* iphone (6/7/8/SE/S8360) */
@media (max-width: 280px) {
	.__movies-item-block {
		width: 130px;
		margin: 10px 3px;
		padding-bottom: 10px;
	}

	.__movies-item-avatar {
		width: 100%;
		height: 250px;
	}

	.__movies-item-average {
		margin: 3px 0 3px 3px;
		font-size: 18px;
	}

	.__movies-item-title {
		margin: 3px 0 3px 3px;
	}

	.__movies-item-date {
		margin: 3px 0 3px 3px;
	}
}
</style>