import { useCallback, useEffect, useState } from 'react'
import './App.css'

import { MoviesList } from './MoviesList'
import { useMovies } from './hooks/useMovies'

import debounce from 'just-debounce-it'

function App() {

	const [searchText, setSearchText] = useState('')
	const [sortingBy, setSortingBy] = useState('')

	const { movies, error, searchMovies } = useMovies({ searchText, sortingBy })

	const debouncedSearchMovies = useCallback(
		debounce(() => {
			searchMovies()
		}, 500)
		, [searchMovies])

	const handleInputChange = (event) => {
		const newSearchText = event.target.value
		setSearchText(newSearchText)
	}

	const handleSelectChange = (event) => {
		const newSorting = event.target.value
		setSortingBy(newSorting)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		// Use FormData to access all fields in the form element, passing the form as a parameter for the constructor
		const fields = new window.FormData(event.target) // <-- fields contiene todos los inputs dentro del <form>
		const newSearchText = fields.get('movieTitle') // <-- el fields.get() coge el value del input, según su atributo 'name'
		setSearchText(newSearchText)
	}

	useEffect(() => {
		// Search Movies through debouncer
		debouncedSearchMovies()
	}, [searchText])

	return (
		<>
			<header>
				<h1>Movie Finder</h1>
				<form onSubmit={handleSubmit}>
					{/* TODO: Change style for className */}
					<div style={{ display: 'flex', gap: '1rem' }}>
						<label>Movie Title
							<input name='movieTitle' type='text' value={searchText} onChange={handleInputChange} placeholder='Avengers, Star Wars...' />
						</label>
						<label>Sort Movies by
							<select name='movieSorting' onChange={handleSelectChange}>
								<option value=''>Default</option>
								{/* TODO: Remove Magic Strings below ('title' and 'year') */}
								<option value='title'>Title</option>
								<option value='year-oldest'>Year (oldest first)</option>
								<option value='year-newest'>Year (newest first)</option>
							</select>
						</label>
					</div>
					<button>
						Search
					</button>
				</form>
			</header>
			<main>
				{
					error
						? <p className='no-movies'>{error}</p>
						: <MoviesList movies={movies} />

				}
			</main>

		</>
	)
}

export default App
