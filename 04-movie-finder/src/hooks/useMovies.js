import { useCallback, useRef, useState } from 'react'
import { getMovies, sortMovies } from '../services/movies'

export function useMovies({ searchText, sortingBy }) {
	const [movies, setMovies] = useState([])
	const [error, setError] = useState()

	const previousSearch = useRef('')

	const searchMovies = useCallback(async () => {
		// If it's the same as the previous search, STOP
		if (!updatePreviousSearch()) return

		// If invalid search query, STOP
		if (!validateMovieSearch(searchText)) return

		// Store newly obtained movies
		const obtainedMovies = await getMovies(searchText)

		// If array is invalid or empty, STOP
		if (!validateMoviesObtained(obtainedMovies)) return

		// QUERY OK: valid query and !== previousSearch, returned valid movies array
		setError(null)
		setMovies(obtainedMovies)
	}, [searchText])

	const updatePreviousSearch = () => {
		// If this search is the same as last search, STOP
		if (previousSearch.current === searchText) return false
		// If it's different, update previousSearch value and continue
		previousSearch.current = searchText
		return true
	}

	const validateMovieSearch = () => {
		if (searchText.length <= 3) {
			setError('The search must contain at least 3 characters.')
			setMovies([])
			return false
		}
		return true
	}

	const validateMoviesObtained = (obtainedMovies) => {
		if (obtainedMovies.length === 0) {
			setError('I\'m sorry, we couldn\'t find any movie with your search criteria...')
			setMovies([])
			return false
		}
		return true
	}

	const sortedMovies =
		sortingBy !== ''
			? sortMovies([...movies], sortingBy)
			: movies

	return { movies: sortedMovies, searchMovies, error }
}
