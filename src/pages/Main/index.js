import React, { Component } from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn-lite';
import moment from 'moment';

import Film from '../../components/Film';
import * as API from '../../api';
import './styles.less';

class Main extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    schedule: [],
  };

  componentDidMount() {
    API.fetchSchedule()
    .then(schedule => {
      this.setState({ schedule });
    });
  }

  render() {
    const { schedule } = this.state;
    const b = block('Main');

    if (!schedule.length) return (
      <div>Loading...</div>
    );

    return (
      <div className={b()}>
        {
          schedule.map(i => {
            const date = moment(i.date).format('DD MMM YYYY');

            return (
              <React.Fragment key={i.date}>
                <div className={b('header')}>{date}</div>
                <Film film={i} />
              </React.Fragment>
            );
          })
        }
      </div>
    );
  }
}

export default Main;
