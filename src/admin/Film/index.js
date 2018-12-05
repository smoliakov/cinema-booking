import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import block from 'bem-cn-lite';
import moment from 'moment';

import './styles.less';

class Film extends Component {
  render() {
    const { film, onDelete } = this.props;

    const b = block('FilmBlock');
    const { id, ...rest } = film;

    return (
      <div className={b()}>
        <div className={b('image')} style={{ backgroundImage: `url(${film.image})` }} />
        <div>
          <div className={b('date')}>
            {moment(film.date).format('DD MMMM YYYY')}
            {' at '}
            {film.time}
          </div>
          <div className={b('id')}><b>ID</b>: {id}</div>
          {Object.keys(rest).map(i => (
            <div key={i}>
              <b>{i}</b>: {film[i]}
            </div>
          ))}
          <div className={b('buttons')}>
            <Button.Group>
              <Button
                onClick={() => false}>
                Edit
              </Button>
              <Button
                type={'danger'}
                onClick={() => onDelete(film.id)}>
                Delete
              </Button>
            </Button.Group>
          </div>
        </div>
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
