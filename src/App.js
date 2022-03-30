import Movies from './Movies';
import AddMovie from './AddMovie';
import './App.css';
import { useState } from 'react';

const App = () => {
	const [movies, setMovie] = useState([
		{ title: 'Die Hard', year: 1988, actor: 'Bruce Willis', id: 1 },
		{ title: 'Rocky', year: 1976, actor: 'Sylvester Stallone', id: 2 },
		{ title: 'Titanic', year: 1997, actor: 'Leonardo Dicaprio', id: 3 },
	]);

	const addMovie = (movie) => {
		movie.id = Math.random();
		setMovie([...movies, movie]);
	};

	const deleteMovie = (id) => {
		let newMovies = movies.filter((movie) => {
			return movie.id !== id;
		});
		setMovie(newMovies);
	};
	return (
		<div className="App">
			<h1>React Lifecycle - Functional Component</h1>
			<Movies movies={movies} deleteMovie={deleteMovie} />
			<AddMovie addMovie={addMovie} setMovie={setMovie} />
		</div>
	);
};

export default App;
