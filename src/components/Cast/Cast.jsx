import { getMovieCredits } from '../../services/moviesService';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  CastContainer,
  CastList,
  CastItem,
  CastImage,
  CastDescr,
  CastName,
  CastCharacter,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams('movieId');
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(setCredits);
  }, [movieId]);

  return (
    <CastContainer>
      {credits.length > 0 && (
        <CastList>
          {credits.map(({ id, name, character, photo }) => {
            return (
              <CastItem key={id}>
                <CastImage src={photo} alt={name} />
                <CastDescr>
                  <CastName>{name}</CastName>
                  <CastCharacter>Character: {character}</CastCharacter>
                </CastDescr>
              </CastItem>
            );
          })}
        </CastList>
      )}
    </CastContainer>
  );
};

export default Cast;
