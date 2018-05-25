import { combineReducers } from 'redux';
import employees from './employees';
import user from './login';

const gameApp = combineReducers({
  user,
  employees
});

export default gameApp;
