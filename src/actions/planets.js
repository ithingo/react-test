import axios from 'axios';

import {
  REQUEST_FETCH_PLANETS,
  RECEIVE_FETCH_PLANETS,
} from './types';

export const fetchPlanets = () => dispatch => {
  dispatch({ type: REQUEST_FETCH_PLANETS });
  axios
    .get('https://swapi.co/api/planets')
    .then(res => dispatch({ type: RECEIVE_FETCH_PLANETS, payload: res.data.results }));
};