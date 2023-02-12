import PropTypes from 'prop-types';
import css from '../ContactListItem/ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.list_item}>
      {name}: {number}
      <button type="button" id={id} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
