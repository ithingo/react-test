import {
  REQUEST_FETCH_PLANETS,
  RECEIVE_FETCH_PLANETS,
} from "../actions/types";

const INITIAL_STATE = {
  isFetching: false,
  data: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_FETCH_PLANETS: {
      return { ...state, isFetching: true };
    }
    case RECEIVE_FETCH_PLANETS: {
      return { ...state, isFetching: false, data: action.payload };
    }
    default:
      return state;
  }
}