import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import MovieList from "./MovieList";

function App() {
    const [movies, setMovies] = useState([]);

    const handleAddMovie = (title) => {
        const newMovie = {
            id: Date.now(),
            title,
            watched: false,
        };
        setMovies((prevMovies) => [...prevMovies, newMovie]);
    };

    const handleToggleWatched = (id) => {
        setMovies((prevMovies) =>
            prevMovies.map((movie) =>
                movie.id === id ? { ...movie, watched: !movie.watched } : movie
            )
        );
    };

    const handleDeleteMovie = (id) => {
        setMovies((prevMovies) =>
            prevMovies.filter((movie) => movie.id !== id)
        );
    };

    return (
        <div>
            <h1>Favorite Movies</h1>
            <AddMovieForm onAddMovie={handleAddMovie} />
            <MovieList
                movies={movies}
                onToggleWatched={handleToggleWatched}
                onDeleteMovie={handleDeleteMovie}
            />
        </div>
    );
}

export default App;
