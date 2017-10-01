import { 
  FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS, 
  POST_FAILURE, POST_REQUEST, POST_SUCCESS,
  UPDATE_FAILURE, UPDATE_REQUEST, UPDATE_SUCCESS,
  DELETE_FAILURE, DELETE_REQUEST, DELETE_SUCCESS
} from './types';

const INITIAL_STATE = {
  errorMessage: '',
  isRequesting: false,
  bookList: []
};

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_REQUEST:
      return { ...state, isRequesting: true };
    case FETCH_SUCCESS:
      return { ...state, bookList: action.bookList, isRequesting: false };
    case FETCH_FAILURE:
      return { ...state, errorMessage: action.errorMessage, isRequesting: false };
    case POST_REQUEST:
      return { ...state, isRequesting: true };
    case POST_SUCCESS:
      return { ...state, isRequesting: false };
    case POST_FAILURE:
      return { ...state, errorMessage: action.errorMessage, isRequesting: false };
    case UPDATE_REQUEST:
      return { ...state, isRequesting: true };
    case UPDATE_SUCCESS:
      return { ...state, isRequesting: false };
    case UPDATE_FAILURE:
      return { ...state, errorMessage: action.errorMessage, isRequesting: false };
    case DELETE_REQUEST:
      return { ...state, isRequesting: true };
    case DELETE_SUCCESS:
      return { ...state, isRequesting: false };
    case DELETE_FAILURE:
      return { ...state, errorMessage: action.errorMessage, isRequesting: false };
    default:
      return state;
  }
};