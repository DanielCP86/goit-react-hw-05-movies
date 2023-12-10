import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  BackButton,
  MovieContainer,
  MovieImage,
  MovieInfo,
  MovieTitle,
  AdditionalInfo,
  InfList,
  InfLink,
} from './MovieDetails.styled';
import { getMovieDetails } from '../../services/moviesService';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const backLink = location.state?.from ?? '/movies';
  const { movieId } = useParams();

  const { poster, title, releaseYear, userScore, overview, genres } =
    movie ?? {};

  const goBack = () => {
    navigate(backLink);
  };

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <main>
      <BackButton type="button" onClick={goBack}>
        Back to movies
      </BackButton>
      {movie && (
        <>
          <MovieContainer>
            <MovieImage src={poster} alt={title} />
            <MovieInfo>
              <MovieTitle>
                {title} ({releaseYear})
              </MovieTitle>
              <p>User Score: {userScore}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genres.map(({ name }) => name).join(' ')}</p>
            </MovieInfo>
          </MovieContainer>
          <AdditionalInfo>Additional information</AdditionalInfo>
          <InfList>
            <li>
              <InfLink to={'cast'} state={{ from: location?.state?.from }}>
                Cast
              </InfLink>
            </li>
            <li>
              <InfLink to={'reviews'} state={{ from: location?.state?.from }}>
                Reviews
              </InfLink>
            </li>
          </InfList>
          <Outlet />
        </>
      )}
    </main>
  );
};

export default MovieDetails;
