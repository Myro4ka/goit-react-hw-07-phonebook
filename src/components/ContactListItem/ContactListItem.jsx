import PropTypes from 'prop-types';
import '../ContactListItem/ContactListItem.module.css';

export const ContactListItem = ({ name, number, handleDelete }) => {
  return (
    <li>
      {name}: {number}
      <button type="button" onClick={() => handleDelete(name)}>
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
