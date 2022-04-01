// import {
//   Poster,
//   Container,
//   PosterContainer,
//   GenreContainer,
//   InfoContainer,
//   CastLink,
// } from './FilmCard.styled';
import { AiFillCaretLeft } from 'react-icons/ai';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';

export const FilmCard = ({ item }) => {
  const filmID = item.id;
  const location = useLocation();

  return (
    <main>
      <div className="wrapper">
        <div>
          <img
            className="wrapperImg"
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt="alt"
          />
        </div>
        <div className="wrapperText">
          <h2>
            {item.title}({item.release_date.slice(0, 4)})
          </h2>
          <p>User score: {item.vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{item.overview}</p>
          <h3>Genres</h3>
          {item.genres.map(item => (
            <p key={item.id}>{item.name}</p>
          ))}
          <Link className="wrapperButton" to={location?.state?.from ?? '/home'}>
            <AiFillCaretLeft />
            Go back
          </Link>
        </div>
      </div>
      <hr />
      <p>Additional information</p>
      <ul className="additionalInformation">
        <li className="nav">
          <NavLink
            to={`/movies/${filmID}/cast`}
            state={{ from: location?.state?.from ?? '/' }}
          >
            Cast
          </NavLink>
          <NavLink
            to={`/movies/${filmID}/reviews`}
            state={{ from: location?.state?.from ?? '/' }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};
