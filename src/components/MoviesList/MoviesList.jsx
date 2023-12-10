import { useLocation } from 'react-router-dom';
import { List, ListItem, ItemLink, Img, ItemTitle } from './MoviesList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, title, poster }) => (
        <ListItem key={id}>
          <ItemLink to={`/movies/${id}`} state={{ from: location }}>
            <Img src={poster} alt={title} />
            <ItemTitle>
              <h3>{title}</h3>
            </ItemTitle>
          </ItemLink>
        </ListItem>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(Object).isRequired,
};
