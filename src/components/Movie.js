import React from "react";

export default function Movie({ movie, onToggleWatched, onDeleteMovie }) {
    const movieStyle = {
        textDecoration: movie.watched ? "line-through" : "none",
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={movie.watched}
                onChange={() => onToggleWatched(movie.id)}
            />
            <span style={movieStyle}>{movie.title}</span>
            <button onClick={() => onDeleteMovie(movie.id)}>Delete</button>
        </li>
    );
}
