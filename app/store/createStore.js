import gameApp from '../reducers/reducer';
import thunkMiddleware from 'redux-thunk';
import rootSaga from '../sagas';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

const enhancers = applyMiddleware(
  loggerMiddleware,
  thunkMiddleware,
  sagaMiddleware
);

const store = createStore(gameApp, enhancers);

sagaMiddleware.run(rootSaga); //register sagas

export default store;
