import { combineReducers } from 'redux';
import checkinReducer from './checkinReducer';
import userReducer from './userReducer';

const allReducers = combineReducers({
  checkinReducer, userReducer,
});

export default allReducers;
