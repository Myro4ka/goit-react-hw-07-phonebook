import css from '../ContactListItem/ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contactsOperations';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.list_item}>
      {name}: {number}
      <button
        type="button"
        id={id}
        onClick={() => dispatch(deleteContactThunk(id))}
      >
        Delete
      </button>
    </li>
  );
};
