import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container from './Container/Container';
import Section from './Section/Section';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export const App = () => {
  class PhoneBook extends Component {
    render() {
      return (
        <div>
          <Section title="Phonebook">
            <Form />
          </Section>
          <Section title="Contacts">
            <Filter />
            <ContactList />
          </Section>
        </div>
      );
    }
  }

  return (
    <Container>
      <PhoneBook />
    </Container>
  );
};

App.propTypes = {
  state: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      })
    ),
    filter: PropTypes.string,
  }),
};
