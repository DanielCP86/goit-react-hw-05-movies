import { getMovieReviews } from '../../services/moviesService';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ReviewsContainer, ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams('movieId');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ReviewsContainer>
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ReviewsList>
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </ReviewsContainer>
  );
};

export default Reviews;
