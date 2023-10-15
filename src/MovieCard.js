import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, onDelete }) => {
  const handleDelete = () => {
    onDelete(); // Call the onDelete function to delete the movie
  };

  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p className="rating">Rating: {movie.rating}</p>
      <button onClick={handleDelete} style={{ backgroundColor: 'blue', color: 'white' }}>
        Delete
      </button>
    </div>
  );
};

export default MovieCard;
