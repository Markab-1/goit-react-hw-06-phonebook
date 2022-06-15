import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './ContactList.module.css';
import action from '../../redux/actions';

const ContactList = ({ visibleContacts, onDeleteContact }) => {
  return (
    <div>
      {visibleContacts && (
        <ul className={s.list}>
          {visibleContacts.map(({ id, name, number }) => (
            <li key={id} className={s.item}>
              <span className={s.contactsName}>{name}: </span>
              <span className={s.number}>{number}</span>
              <button
                type="button"
                onClick={() => onDeleteContact(id)}
                className={s.btn}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ phonebook: { contacts, filter } }) => ({
  visibleContacts: getVisibleContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(action.deleteData(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
