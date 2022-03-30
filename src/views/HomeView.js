import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moviesApi from '../services/movies-api';
import PageHeading from 'components/PageHeading/PageHeading';

export default function HomeView() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesApi.fetchApiMovieTrending().then(setMovies);
  }, []);

  return (
    <>
      <PageHeading text="Trending today" />
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link className="text" to={`movies/${movie.id}`}>
                <p>{movie.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
