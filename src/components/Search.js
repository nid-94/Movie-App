import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import MovieList from "./MovieList";

const Search = () => {
    const [search, setSearch] = useState("");

    return (
        <div>
            <Form.Control
                type="email"
                placeholder="search by name or rate"
                onChange={(e) => setSearch(e.target.value)}
            />
            <MovieList input={search} />
        </div>
    );
};

export default Search;
