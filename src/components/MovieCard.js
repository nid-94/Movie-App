import React from "react";
import { Card } from "react-bootstrap";

const MovieCard = ({ movies }) => {
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={movies.posterUrl} />
                <Card.Body>
                    <Card.Title>{movies.title}</Card.Title>
                    <Card.Text>Description :{movies.description}</Card.Text>
                    <Card.Text>Rate : {movies.rate}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MovieCard;
