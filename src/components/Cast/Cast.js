import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import moviesApi from 'services/movies-api';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    moviesApi.fetchApiMovieCast(movieId).then(setCast);
    scroll.scrollMore(600);
  }, [movieId]);

  return (
    <>
      {cast && (
        <>
          <ul className="gallery">
            {cast.map(({ cast_id, profile_path, name, character }) => (
              <li key={cast_id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt=""
                />
                <h3>{name}</h3>
                <p>Charachter: {character}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
