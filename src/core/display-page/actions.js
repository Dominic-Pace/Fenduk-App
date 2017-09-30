import axios from 'axios';

import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS, POST_FAILURE, POST_REQUEST, POST_SUCCESS } from './types';

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

export const createNewBook = (newBook) => {
  const newBookConfig = {
    url: 'http://localhost:3000/imports',
    method: 'post',
    newBook: {
      title: newBook.title,
      description: newBook.description,
      author: newBook.author,
      tags: newBook.tags,
      created_at: newBook.created_at,
      updated_at: newBook.updated_at
    }
  }
  return dispatch => {
    dispatch({type: POST_REQUEST})
    return axios.post('http://localhost:3000/imports')
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