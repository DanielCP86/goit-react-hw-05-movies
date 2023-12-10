import { Wrapper, Input, Form, Button } from './SearchBox.styled';
import PropTypes from 'prop-types';

export const SearchBox = ({ value, onChange, onSubmit }) => {
  return (
    <Wrapper>
      <Form
        onSubmit={e => {
          e.preventDefault();
          onSubmit(e.currentTarget[0].value?.toLowerCase().trim());
        }}
      >
        <Input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        <Button type="submit">search</Button>
      </Form>
    </Wrapper>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
