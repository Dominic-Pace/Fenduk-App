import axios from 'axios';

import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from './types';

export const fetchListOfBooks = () => {
  return dispatch => {
    dispatch({type: FETCH_REQUEST})
    return axios('http://localhost:3000/imports')
      .then(res => {
        dispatch({type: FETCH_SUCCESS, bookList: res.data})
      })
      .catch(err => {
        dispatch({
          type: FETCH_FAILURE,
          errorMessage: 'Cannot complete the request at this time. Please try again later.'
        })
      })
  }
}

