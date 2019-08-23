import { combineReducers } from 'redux';
import screenReducer from './screenReducer';

export default combineReducers({
  screen: screenReducer,
});
