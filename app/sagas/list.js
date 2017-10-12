import { call, put, take } from 'redux-saga/effects';
import fetchRequest from '../helper/fetchHelper';
import {
  receiveEmployeeSuccess,
  RECEIVE_EMPLOYEE
} from '../actions/employeeAction';

export function* lsitAsync() {
  try {
    let result = yield call(fetchRequest, '/api/v1/employees', 'GET');
    yield put(receiveEmployeeSuccess(result.data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchListAsync() {
  yield take(RECEIVE_EMPLOYEE);
  yield call(lsitAsync);
}
