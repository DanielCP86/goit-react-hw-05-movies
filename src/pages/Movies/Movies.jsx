import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { getMoviesByName } from '../../services/moviesService';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchName = searchParams.get('name') ?? '';
  const [query, setQuery] = useState(searchName);
  const [movies, setMovies] = useState([]);

  const updateQuery = name => {
    setQuery(name);
  };

  const handleSubmit = async name => {
    const response = await getMoviesByName(name);
    setMovies(response);
    setSearchParams({ name });
  };

  useEffect(() => {
    setQuery(searchName);
    searchName && getMoviesByName(searchName).then(setMovies);
  }, [searchName]);

  return (
    <main>
      <SearchBox value={query} onChange={updateQuery} onSubmit={handleSubmit} />
      {movies?.length > 0 && <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
