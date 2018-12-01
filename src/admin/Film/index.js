import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Film extends Component {
  render() {
    const { film, onDelete } = this.props;

    return (
      <div>
        {
          Object.keys(film).map(i => {
            return (
              <div key={i} style={{ fontSize: '12px' }}>
                <b>{i}</b>: {film[i]}
              </div>
            );
          })
        }
        <div>
          <button type={'button'} onClick={() => onDelete(film.id)}>
            Delete
          </button>
        </div>
        <div>-----------</div>
      </div>
    );
  }
}

Film.propTypes = {
  film: PropTypes.object,
  onDelete: PropTypes.func,
};
Film.defaultProps = {};

export default Film;
