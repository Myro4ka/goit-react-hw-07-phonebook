import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';

export const Filter = ({ filter, handleChange }) => {
  return (
    <>
      <p className={css.filter_title}>Find contacts by name</p>
      <input
        className={css.filter_input}
        type="text"
        name="filter"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
        value={filter}
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};
