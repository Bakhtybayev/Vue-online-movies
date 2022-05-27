<template>
	<div class="__pagination-movies-block">
		<div class="__pagination-movies-button-boxes">
			<button @click="prevPage" :disabled="currentPortion === 0" class="__pagination-movies-button-prev-next">
				{{ "<" }} </button>
					<button @click="handleChangePage(page)" v-for="page of pagination" :key="page"
						:class="{ ['__is-active']: currentPage === page }" :disabled="currentPage === page"
						id="__pagination-movies-number-boxes">
						{{ page }}
					</button>
					<button @click="nextPage" :disabled="currentPortion === portionCount - 1"
						class="__pagination-movies-button-prev-next">
						{{ ">" }}
					</button>
		</div>
		<span class="__pagination-movies-from-to">
			Viewing {{ moviesFirstElem }} - {{ moviesLastElem }} of {{ totalMoviesCount }} {{ listName }}
		</span>
	</div>
</template>

<script>

export default {
	data() {
		return {
			listName: 'Popular Movies',
			pages: [],
			currentPortion: 0,
			portionItemsCount: 5
		}
	},
	props: {
		pageMoviesCount: Number,
		totalMoviesCount: Number,
		currentPage: Number,
		pagesCount: Number,
		getMovies: Function
	},
	emits: ['handle-get-movies-with-page'],
	created() {
		for (let i = 0; i <= this.pagesCount; i++) this.pages.push(i);
	},
	computed: {
		portionCount() {
			return Math.ceil(this.pagesCount / this.portionItemsCount);
		},
		portionFirstElem() {
			return (this.currentPortion * this.portionItemsCount) + 1;
		},
		portionLastElem() {
			return (this.currentPortion + 1) * this.portionItemsCount;
		},
		moviesFirstElem() {
			return (this.currentPage - 1) * this.pageMoviesCount + 1;
		},
		moviesLastElem() {
			return (this.currentPage * this.pageMoviesCount) > this.totalMoviesCount ? this.totalMoviesCount : (this.currentPage * this.pageMoviesCount);
		},
		pagination() {
			return this.pages.filter(page => {
				return this.portionFirstElem <= page && page <= this.portionLastElem
			}).map(page => {
				return page
			})
		}
	},
	methods: {
		handleChangePage(page) {
			this.$emit('handle-get-movies-with-page', page);
		},
		prevPage() {
			return this.currentPortion = this.currentPortion - 1;
		},
		nextPage() {
			return this.currentPortion = this.currentPortion + 1
		}
	}
}
</script>

<style scoped>
.__pagination-movies-button-boxes {
	margin-bottom: 1rem;
}

#__pagination-movies-number-boxes {
	border: none;
	box-shadow: 0 0 30px rgba(14, 26, 131, 0.699);
	font-size: 20px;
	border-radius: 5px;
	padding: 0.8rem;
	margin: 0.2rem 0.5rem;
	cursor: pointer;
	font-weight: 600;
	font-family: Arial, Helvetica, sans-serif;
}

#__pagination-movies-number-boxes:hover {
	background-color: rgba(9, 42, 189, 0.863);
	color: white;
}

.__pagination-movies-button-prev-next {
	color: white;
	background-color: rgba(34, 30, 30, 0.712);
	border: none;
	box-shadow: 0 0 30px rgba(14, 26, 131, 0.699);
	font-size: 20px;
	border-radius: 5px;
	padding: 0.8rem;
	margin: 0.2rem 0.5rem;
	cursor: pointer;
	font-weight: 600;
	font-family: Arial, Helvetica, sans-serif;
}

.__pagination-movies-button-prev-next:hover {
	background-color: rgba(9, 42, 189, 0.973);
	color: white;
}

.__pagination-movies-block {
	text-align: center;
}

.__pagination-movies-from-to {
	font-size: 25px;
	font-weight: 600;
	font-family: 'Courier New', Courier, monospace;
}

.__is-active {
	background-color: rgba(9, 42, 189, 0.863);
	color: white;
}

/* Media for Mobile */
@media (max-width: 760px) {
	#__pagination-movies-number-boxes {
		font-size: 16px;
		padding: 0.5rem;
		margin: 0.2rem 0.3rem;
		font-weight: 500;
	}

	.__pagination-movies-button-prev-next {
		font-size: 16px;
		padding: 0.5rem;
		margin: 0.2rem 0.3rem;
		font-weight: 500;
	}

	.__pagination-movies-from-to {
		font-size: 16px;
		font-weight: 500;
		font-family: 'Courier New', Courier, monospace;
	}
}
</style>