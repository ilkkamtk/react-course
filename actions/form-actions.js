import * as actionTypes from './action-types';

export const setQueryFormAction = (query) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_SEARCH,
      query,
    });
  };
};

export const resetQueryFormAction = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.RESET_SEARCH,
    });
  };
};
