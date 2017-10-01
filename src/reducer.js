import { combineReducers } from 'redux';

import displayReducer from './core/display-page/reducer';

const RootReducer = combineReducers({
  display: displayReducer
});

export default RootReducer;
