import React, { Component } from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn-lite';
import firebase from 'firebase/app';
import 'firebase/firestore';

import Film from '../../components/Film';
import * as API from '../../api';
import './styles.less';

class Main extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    data: null,
    schedule: [],
  };

  componentDidMount() {
    API.fetchFilms()
    .then(data => {
      this.setState({
        data,
      });
    });

    const config = {
      apiKey: 'AIzaSyCdMMVIMRN5mMo6tbJXBitxG1uyh19eP1M',
      authDomain: 'iq-cinema.firebaseapp.com',
      databaseURL: 'https://iq-cinema.firebaseio.com',
      projectId: 'iq-cinema',
      storageBucket: 'iq-cinema.appspot.com',
      messagingSenderId: '859871658006',
    };

    firebase.initializeApp(config);
    const firestore = firebase.firestore();
    firestore.settings({ timestampsInSnapshots: true });

    this.readSchedule(firestore)
    .then(schedule => {
      console.warn(schedule);
      this.setState({ schedule });
    });
  }

  readSchedule = (firestore) => {
    const schedule = firestore.collection('schedule');
    return schedule.get().then(querySnapshot => {
      const arr = [];
      querySnapshot.forEach(doc => {
        const data = doc.data();
        data.id = doc.id;
        arr.push(data);
      });
      return arr;
    });
  };

  render() {
    const { data, schedule } = this.state;

    const b = block('Main');

    if (!data) return null;

    console.warn(schedule);

    return (
      <div className={b()}>
        {
          schedule.map(i => {

            return (
              <React.Fragment key={i.date}>
                <div className={b('header')}>{i.date}</div>
                <Film film={i} />
              </React.Fragment>
            );
          })
        }

        {/*<div className={b('header')}>Сегодня в IQ Cinema</div>*/}
        {/*<Film film={data.today} />*/}
        {/*{*/}
        {/*data.schedule.map(i => {*/}
        {/*return (*/}
        {/*<React.Fragment key={i.date}>*/}
        {/*<div className={b('header')}>{i.date}</div>*/}
        {/*<Film film={i.film} />*/}
        {/*</React.Fragment>*/}
        {/*);*/}
        {/*})*/}
        {/*}*/}
      </div>
    );
  }
}

export default Main;
