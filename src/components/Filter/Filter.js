import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import s from './Filter.module.css';
import phonebookActions from '../../redux/actions';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <p className={s.text}>Find contacts by name:</p>
      <input
        type="text"
        name="filter"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChange}
        className={s.input}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(phonebookActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string,
};
