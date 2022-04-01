import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MovieReview } from '../Services/MovieDB';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const location = useLocation();
  const preId = location.pathname.slice(8);
  const id = preId.slice(0, -8);

  useEffect(() => {
    async function Reviews() {
      try {
        const reviewItem = await MovieReview(id);
        setReviews(reviewItem);
      } catch (error) {
        console.log(error);
      }
    }
    Reviews();
  }, [id]);

  if (reviews.length !== 0) {
    return (
      <ul className="reviews">
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p className="review">author: {author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <h3 className="reviews__phrase">
        We don`t have any reviews for this movie
      </h3>
    );
  }
};
