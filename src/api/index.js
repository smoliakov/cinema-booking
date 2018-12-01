import firebase from 'firebase/app';
import 'firebase/firestore';

//const config = {
//  apiKey: 'AIzaSyCdMMVIMRN5mMo6tbJXBitxG1uyh19eP1M',
//  authDomain: 'iq-cinema.firebaseapp.com',
//  databaseURL: 'https://iq-cinema.firebaseio.com',
//  projectId: 'iq-cinema',
//  storageBucket: 'iq-cinema.appspot.com',
//  messagingSenderId: '859871658006',
//};

const config2 = {
  apiKey: 'AIzaSyCI8L_4J_jYfqdvNPZuJLQEtfjfjsob9BE',
  authDomain: 'cinema-booking-50cb7.firebaseapp.com',
  databaseURL: 'https://cinema-booking-50cb7.firebaseio.com',
  projectId: 'cinema-booking-50cb7',
  storageBucket: 'cinema-booking-50cb7.appspot.com',
  messagingSenderId: '837992740170',
};

firebase.initializeApp(config2);
export const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });
const schedule = firestore.collection('schedule');

export const fetchSchedule = () => {
  return schedule.get().then(querySnapshot => {
    const arr = [];
    querySnapshot.forEach(doc => {
      const data = doc.data();
      data.id = doc.id;
      arr.push(data);
    });
    arr.sort((a, b) => a.date > b.date ? 1 : -1);
    return arr;
  });
};

export const addFilm = (film) => {
  return schedule.add(film);
};

export const removeFilm = (id) => {
  return schedule.doc(id).delete();
};