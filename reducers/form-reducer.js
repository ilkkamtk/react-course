import * as actionTypes from '../actions/action-types';

const initialState = {
  query: '',
};

export default (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.SET_SEARCH:
      return {
        ...state,
        query: action.query,
      };
    default:
      return state;
  }
}