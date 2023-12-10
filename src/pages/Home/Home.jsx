import { HomeContainer, HomeTitle } from './Home.styled';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../services/moviesService';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(r => setMovies(r));
  }, []);

  return (
    <main>
      <HomeContainer>
        <HomeTitle>Trending today</HomeTitle>
        {movies?.length > 0 && <MoviesList movies={movies} />}
      </HomeContainer>
    </main>
  );
};

export default Home;
