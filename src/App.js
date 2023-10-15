import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import Filter from './task';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'La petit sérene',
      description: '“La Petite Sirène : Jeune sirène de 15 ans, elle se distingue de ses cinq sœurs par sa grande beauté, sa merveilleuse voix et son caractère singulier ce était une enfant bizarre, silencieuse et réfléchie. » De nature très curieuse, elle est attirée par le monde des hommes qui la fascine',
      posterURL: 'dis1.jpeg',
      rating: 3.4,
    },
    {
      title: 'Tiana',
      description: 'Tiana is a fictional character in Walt Disney Pictures 49th animated feature film The Princess and the Frog (2009)',
      posterURL: 'dis2.jpeg',
      rating: 2.9,
    },
    {
      title: 'Elemental',
      description: 'Dans la ville de Element City, le feu, le eau, la terre et le air vivent dans la plus parfaite harmonie',
      posterURL: 'dis3.jpeg',
      rating: 4.2,
    },
    // Ajoutez d'autres films ici
  ]);

  const [filter, setFilter] = useState({ title: '', rating: '' });
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
  });

  const handleFilterChange = (filterType, value) => {
    setFilter({ ...filter, [filterType]: value });
  };

  const handleNewMovieChange = (field, value) => {
    setNewMovie({ ...newMovie, [field]: value });
  };

  const addMovie = () => {
    // Créez une copie de l'array movies actuel
    const updatedMovies = [...movies];

    // Ajoutez le nouveau film à la copie
    updatedMovies.push({ ...newMovie });

    // Mettez à jour l'array movies avec la nouvelle copie
    setMovies(updatedMovies);

    // Réinitialisez les champs d'entrée pour le prochain ajout
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: '',
    });
  };

  const onDelete = (index) => {
    // Créez une copie de l'array movies actuel
    const updatedMovies = [...movies];

    // Supprimez le film à l'index spécifié
    updatedMovies.splice(index, 1);

    // Mettez à jour l'état avec la nouvelle copie
    setMovies(updatedMovies);
  };

  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.title.toLowerCase().includes(filter.title.toLowerCase());
    const ratingMatch = filter.rating === '' || movie.rating >= parseFloat(filter.rating);
    return titleMatch && ratingMatch;
  });

  return (
    <div className="App">
      <h1>My Movie App</h1>
      <div className="filter-and-button">
        <Filter handleFilterChange={handleFilterChange} />
        <div className="add-movie-form">
          <input
            type="text"
            placeholder="Title"
            value={newMovie.title}
            onChange={(e) => handleNewMovieChange('title', e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={newMovie.description}
            onChange={(e) => handleNewMovieChange('description', e.target.value)}
          />
          <input
            type="text"
            placeholder="Poster URL"
            value={newMovie.posterURL}
            onChange={(e) => handleNewMovieChange('posterURL', e.target.value)}
          />
          <input
            type="text"
            placeholder="Rating"
            value={newMovie.rating}
            onChange={(e) => handleNewMovieChange('rating', e.target.value)}
          />
          <button onClick={addMovie}>Add New Movie</button>
        </div>
      </div>
      <MovieList movies={filteredMovies} onDelete={onDelete} />
    </div>
  );
}

export default App;
