import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ applyFilterContacts, deleteContact }) => {
  return (
    <ul className={css.list}>
      {applyFilterContacts().map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            handleDelete={deleteContact}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  applyFilterContacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
