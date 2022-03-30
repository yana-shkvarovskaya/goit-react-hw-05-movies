import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import moviesApi from 'services/movies-api';
import './Reviews.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    moviesApi.fetchApiMovieReviews(movieId).then(setReviews);
    scroll.scrollMore(600);
  }, [movieId]);
  return (
    <>
      {reviews && reviews.length > 0 ? (
        <ul className="reviews">
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="reviews__phrase">We don't have reviews for this movie.</p>
      )}
    </>
  );
}
