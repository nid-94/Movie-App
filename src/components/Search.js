import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import MovieList from "./MovieList";
import "./Search.css";
const Search = () => {
    const [search, setSearch] = useState("");

    return (
        <div>
            <div className="search">
                <Form.Control
                    type="email"
                    placeholder="search by name or rate"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <MovieList input={search} />
        </div>
    );
};

export default Search;
