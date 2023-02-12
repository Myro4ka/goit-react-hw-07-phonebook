import css from '../Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value.toLowerCase()));
  };

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
