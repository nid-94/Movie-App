import React from "react";
import { useState } from "react";
import { MovieData } from "./../constants/Data";
import Add from "./Add";
import MovieCard from "./MovieCard";
const MovieList = ({ input }) => {
    const [movie, setMovie] = useState(MovieData);
    const addMovie = (newMovie) => {
        setMovie([...movie, newMovie]);
    };
    return (
        <div>
            <Add addMovie={addMovie} />
            <br />
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                {" "}
                {movie
                    .filter(
                        (movie) =>
                            movie.title.toUpperCase().includes(input.toUpperCase()) ||
                            movie.rate >= input
                    )
                    .map((el) => (
                        <MovieCard movies={el} key={el.id} />
                    ))}
            </div>
        </div>
    );
};

export default MovieList;
