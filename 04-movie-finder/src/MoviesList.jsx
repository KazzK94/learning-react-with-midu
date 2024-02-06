
import './MoviesList.css'

export function MoviesList({ movies }) {
	return (
		<div className='moviesList'>
			{
				movies.map((movie) => {
					return (
						<div key={movie.id}>
							<h3>{movie.title}</h3>
							<p>Year: {movie.year}</p>
							<img src={movie.image} alt={`Image for ${movie.title}`} />
						</div>
					)
				})
			}
		</div>
	)
}
