import React, { Component } from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn-lite';
import { Form, Field } from 'react-final-form';

import AddFilmForm from '../AddFilmForm';
import Film from '../Film';
import * as API from '../../api';
import './styles.less';

class Schedule extends Component {
  state = {
    schedule: [],
  };

  componentDidMount() {
    this.fetchSchedule();
  }

  fetchSchedule = () => {
    return API.fetchSchedule()
    .then(schedule => {
      this.setState({ schedule });
    });
  };

  onSubmit = (values) => {
    console.warn(values);

    API.addFilm(values)
    .then(() => {
      return this.fetchSchedule();
    });
  };

  onDelete = id => {
    API.removeFilm(id)
    .then(() => {
      return this.fetchSchedule();
    });
  };

  render() {
    const { schedule } = this.state;

    return (
      <div>
        <h2>Schedule</h2>

        <AddFilmForm onSubmit={this.onSubmit} />

        {schedule.map(i => <Film onDelete={this.onDelete} film={i} key={i.id} />)}
      </div>
    );
  }
}

Schedule.propTypes = {};
Schedule.defaultProps = {};

export default Schedule;
