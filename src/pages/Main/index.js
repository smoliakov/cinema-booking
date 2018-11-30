import React, { Component } from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn-lite';

import Film from '../../components/Film';
import * as API from '../../api';
import './styles.less';

class Main extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    data: null,
  };

  componentDidMount() {
    API.fetchFilms()
    .then(data => {
      this.setState({
        data,
      });
    });
  }

  render() {
    const { data } = this.state;

    const b = block('Main');

    if (!data) return null;

    return (
      <div className={b()}>
        <div className={b('header')}>Сегодня в IQ Cinema</div>
        <Film film={data.today} />
        {
          data.schedule.map(i => {
            return (
              <React.Fragment key={i.date}>
                <div className={b('header')}>{i.date}</div>
                <Film film={i.film} />
              </React.Fragment>
            );
          })
        }
      </div>
    );
  }
}

export default Main;
