import React, { Component } from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn-lite';
import moment from 'moment';

import './styles.less';

class Film extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    const { film: { image, title, genre, year, duration, date, time } } = this.props;

    const b = block('Film');

    return (
      <div className={'FilmContent'}>
        <div className={b('date')}>
          {moment(date).format('DD MMM YYYY')}
          {time && ` at ${time}`}
        </div>
        <div className={b()}>
          <div className={b('poster')} style={{ backgroundImage: `url(${image})` }} />
          <div className={b('info')}>
            <div className={b('title')}>{title}</div>
            <div className={b('additional')}>{duration} ‧ {year}</div>
            <div className={b('additional')}>{genre}</div>
            <div className={b('bookButton')}>
              <button type={'button'}>Book</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Film;
