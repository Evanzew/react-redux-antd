import { combineReducers } from 'redux';
import employees from './employees';
import user from './login';
import game from './game';

const gameApp = combineReducers({
  user,
  game,
  employees
});

export default gameApp;
