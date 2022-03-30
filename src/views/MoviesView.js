import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moviesApi from 'services/movies-api';
import Searchbar from 'components/Searchbar/Searchbar';
// import MovieCard from 'components/MovieCard/MovieCard';
// import s from 'components/HomePage/HomePage.module.css';

export default function MoviesView() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);

  const handleFormSubmit = query => {
    setQuery(query);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    moviesApi.fetchApiMoviesByQuery(query).then(setMovies);
  }, [query]);

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />

      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              {/* <img src={`${srcBaseUrl}${movie.poster_path}`} alt={movie.title}></img> */}
              <Link className="text" to={`${movie.id}`}>
                <p>{movie.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}