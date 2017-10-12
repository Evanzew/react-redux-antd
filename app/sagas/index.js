import { fork } from 'redux-saga/effects';
import { watchListAsync } from './list';
import { watchLoginAsync } from './login';
import { watchDelAsync } from './deleteEmployee';
import { watchAddAsync } from './createEmployee';
import { watchFindAsync } from './getEmployeeByOption';
import { watchUpdateAsync } from './updateEmployee';
export default function* rootSaga() {
  yield [
    fork(watchListAsync),
    fork(watchLoginAsync),
    fork(watchDelAsync),
    fork(watchAddAsync),
    fork(watchFindAsync),
    fork(watchUpdateAsync)
  ];
}
