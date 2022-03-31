import {
  useParams,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import PageHeading from 'components/PageHeading/PageHeading';
import moviesApi from 'services/movies-api';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export default function OneMovieView() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [visibleCast, setVisibleCast] = useState(false);
  const [visibleReviews, setVisibleReviews] = useState(false);

  const navigate = useNavigate();
  const srcBaseUrl = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    moviesApi.fetchApiMovieDetails(movieId).then(setMovie);
    scroll.scrollMore(100);
  }, [movieId]);

  const onBackClick = e => {
    e.preventDefault();
    navigate('/');
  };

  const onVisibleCast = () => {
    if (visibleReviews) {
      setVisibleReviews(false);
    }
    setVisibleCast(true);
  };

  const onVisibleReviews = () => {
    if (visibleCast) {
      setVisibleCast(false);
    }
    setVisibleReviews(true);
  };

  return (
    <>
      <PageHeading text="Movie Details" />

      {movie && (
        <>
          <div className="wrapper">
            <div>
              <img
                className="wrapperImg"
                src={`${srcBaseUrl}${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className="wrapperText">
              <h3>
                {movie.title}({movie.release_date.split('-')[0]})
              </h3>
              <p>User Score: {movie.vote_average * 10}%</p>

              <h3>Overview</h3>
              <p>{movie.overview}</p>

              {<h3>Genres</h3>}
              {<p>{movie.genres.map(genre => genre.name).join(' , ')}</p>}

              <button className="wrapperButton" onClick={onBackClick}>
                Go Back
              </button>
            </div>
          </div>

          <hr />
          <p>Additional information</p>

          <ul className="additionalInformation">
            <li className="nav">
              <NavLink
                to={{
                  pathname: `/movies/${movieId}/cast`,
                }}
                onClick={onVisibleCast}
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                Cast
              </NavLink>
            </li>

            <li>
              <NavLink
                to={{
                  pathname: `/movies/${movieId}/reviews`,
                }}
                onClick={onVisibleReviews}
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <hr />
          <Suspense fallback={<h2>Loading...</h2>}>
            <Routes>
              <Route path="/cast" element={<Cast id={movieId} />}></Route>
              <Route path="/reviews" element={<Reviews id={movieId} />}></Route>
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}
