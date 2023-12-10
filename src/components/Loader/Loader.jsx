import { RotatingLines } from 'react-loader-spinner';
import { Load } from './Loader.styled';

export const Loader = () => {
  return (
    <Load>
      <RotatingLines
        strokeColor="#3f51b590"
        strokeWidth="5"
        animationDuration="0.75"
        width="150"
        visible={true}
      />
    </Load>
  );
};
