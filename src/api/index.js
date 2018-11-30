import fixtures from '../fixtures';

export const fetchFilms = () => {
  return new Promise(resolve => {
    resolve(fixtures);
  });
};