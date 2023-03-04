import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Contact } from './Contact/Contact';

import css from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { contacts } = this.props;

    return (
      <ul>
        {contacts.map(elem => (
          <li key={elem.id} className={css.element}>
            <Contact
              name={elem.name}
              number={elem.number}
              id={elem.id}
              onDelete={this.props.onDelete}
            />
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
};

export { ContactList };
