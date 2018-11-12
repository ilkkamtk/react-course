import * as actionTypes from './action-types';
import fetchGetJSON from '../util/fetchGetJson';

const apiUrl = 'http://api.tvmaze.com/';

export const getTVMazeShowsAction = (query) => {
  return (dispatch) => {
    fetchGetJSON(`${apiUrl}/search/shows/?q=${query}`).then((shows) => {
      dispatch({
        type: actionTypes.GET_SHOWS,
        shows,
      });
    });
  };
};
