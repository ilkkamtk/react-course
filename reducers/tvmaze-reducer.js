import * as actionTypes from '../actions/action-types';

const initialState = {
  shows: [],
};

export default (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.GET_SHOWS:
      return {
        ...state,
        shows: action.shows,
      };
    default:
      return state;
  }
}