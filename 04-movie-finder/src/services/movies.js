
const API_URL_SEARCH_PREFIX = 'https://www.omdbapi.com/?apikey=edc9b786&s='

export async function getMovies(searchText) {
	console.log('Fetching data...')
	return await fetch(`${API_URL_SEARCH_PREFIX}${searchText}`)
		.then(res => res.json())
		.then(res => {
			const mappedMovies = res.Search?.map((movie) => {
				return {
					id: movie.imdbID,
					title: movie.Title,
					image: movie.Poster,
					year: movie.Year
				}
			})
			return mappedMovies || []
		})
}

export function sortMovies(movies, sorting) {
	const sortedMovies = movies.sort((a, b) => {
		if (sorting === 'title') {
			return a.title.localeCompare(b.title)
		}
		if (sorting === 'year-newest') {
			return b.year - a.year
		}
		if (sorting === 'year-oldest') {
			return a.year - b.year
		}
		return -1
	})
	return sortedMovies
}
