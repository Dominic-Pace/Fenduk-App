import axios from 'axios';
import moment from 'moment';

import {
  FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS,
  POST_FAILURE, POST_REQUEST, POST_SUCCESS,
  UPDATE_FAILURE, UPDATE_REQUEST, UPDATE_SUCCESS,
  DELETE_FAILURE, DELETE_REQUEST, DELETE_SUCCESS
} from './types';

/**
 * Method used to fetch all books in the database via rest call.
 * @returns {function(*)}
 */
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

/**
 * Method used to create a new book via a REST call.
 * @param newBook - book object
 * @returns {function(*)}
 */
export const createNewBook = (newBook) => {
  const newBookConfig = {
    url: 'http://localhost:3000/imports',
    method: 'post',
    newBook: {
      title: newBook.title,
      description: newBook.description,
      author: newBook.author,
      tags: newBook.tags,
      created_at: moment().unix(),
      updated_at: null
    }
  }
  return dispatch => {
    dispatch({type: POST_REQUEST})
    return axios.post(newBookConfig.url, newBookConfig.newBook)
      .then(res => {
        dispatch({type: POST_SUCCESS})
        window.location.reload();
      })
      .catch(err => {
        dispatch({
          type: POST_FAILURE,
          errorMessage: 'Cannot complete the request at this time. Please try again later.'
        })
      })
  }
}

/**
 * Method used to Update a single book.
 * @param updatedBook - book object
 * @param id - id of book
 * @returns {function(*)}
 */
export const updateBook = (updatedBook, id) => {
  const bookConfig = {
    url: 'http://localhost:3000/imports/' + id,
    method: 'post',
    newBook: {
      title: updatedBook.title,
      description: updatedBook.description,
      author: updatedBook.author,
      tags: updatedBook.tags,
      created_at: moment(updatedBook.created_at).unix(),
      updated_at: moment().unix()
    }
  }
  return dispatch => {
    dispatch({type: UPDATE_REQUEST})
    return axios.put(bookConfig.url, bookConfig.newBook)
      .then(res => {
        dispatch({type: UPDATE_SUCCESS})
        window.location.reload();
      })
      .catch(err => {
        dispatch({
          type: UPDATE_FAILURE,
          errorMessage: 'Cannot complete the request at this time. Please try again later.'
        })
      })
  }
}

/**
 * Method used to remove a single book from the database.
 * @param id - id of the book.
 * @returns {function(*)}
 */
export const removeBook = (id) => {
  return dispatch => {
    dispatch({type: DELETE_REQUEST})
    return axios.delete('http://localhost:3000/imports/' + id)
      .then(res => {
        dispatch({type: DELETE_SUCCESS})
        window.location.reload();
      })
      .catch(err => {
        dispatch({
          type: DELETE_FAILURE,
          errorMessage: 'Cannot complete the request at this time. Please try again later.'
        })
      })
  }

}