import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Contact.module.css';

class Contact extends Component {
  clickHandler = event => {
    this.props.onDelete(event.currentTarget.id);
  };

  render() {
    const { name, number, id } = this.props;
    return (
      <>
        <p>
          {name}: {number}
        </p>
        <button
          type="button"
          id={id}
          onClick={this.clickHandler}
          className={css.button}
        >
          Delete
        </button>
      </>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export { Contact };
