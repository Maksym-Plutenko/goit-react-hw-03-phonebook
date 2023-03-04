import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Filter.module.css';

class Filter extends Component {
  state = {
    name: '',
  };

  changeHandler = event => {
    this.setState({
      name: event.currentTarget.value,
    });
    this.props.changeAction(event.currentTarget.value);
  };

  render() {
    return (
      <div className={css.container}>
        <strong>Find contacts by name</strong>
        <input
          id="filter"
          type="text"
          name="filter"
          value={this.state.name}
          onChange={this.changeHandler}
          className={css.input}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  changeAction: PropTypes.func,
};

export { Filter };
