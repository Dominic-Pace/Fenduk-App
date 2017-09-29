import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from './types';

const INITIAL_STATE = {
  errorMessage: '',
  isRequesting: false
};

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_REQUEST:
      return { ...state, isRequesting: true };
    case FETCH_SUCCESS:
      return { ...state, bookList: action.bookList, isRequesting: false };
    case FETCH_FAILURE:
      return { ...state, errorMessage: action.errorMessage, isRequesting: false };
    default:
      return state;
  }
};