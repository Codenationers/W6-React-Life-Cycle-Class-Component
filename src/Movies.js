const Movie = ({ movies, deleteMovie }) => {
	return (
		<div className="ninja-list">
			{movies.map((movie) => {
				return (
					<div className="movie" key={movie.id}>
						<div>Title: {movie.title}</div>
						<div>Year: {movie.year}</div>
						<div>Actor: {movie.actor}</div>
						<button
							onClick={() => {
								deleteMovie(movie.id);
							}}>
							Delete Movie
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default Movie;
