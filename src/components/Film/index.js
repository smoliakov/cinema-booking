import React, { Component } from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn-lite';

import './styles.less';

class Film extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    const { film: { image, title, genre, year, duration, description, link } } = this.props;

    const b = block('Film');
    const hostname = new URL(link).hostname;

    return (
      <div className={b()}>
        <div className={b('poster')} style={{ backgroundImage: `url(${image})` }} />
        <div className={b('title')}>{title} ({year})</div>
        <div className={b('info')}>{genre} ‧ {duration}</div>
        <div className={b('description')}>{description}</div>
        <div className={b('link')}>
          <a href={link} target={'_blank'}>{hostname}</a>
        </div>
      </div>
    );
  }
}

export default Film;
