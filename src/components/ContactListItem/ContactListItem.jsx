import PropTypes from 'prop-types';
import css from '../ContactListItem/ContactListItem.module.css';

export const ContactListItem = ({ name, number, id, handleDelete }) => {
  return (
    <li className={css.list_item}>
      {name}: {number}
      <button type="button" id={id} onClick={() => handleDelete(id)}>
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
