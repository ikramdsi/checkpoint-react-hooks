import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ movies, onDelete }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
};

export default MovieList;
