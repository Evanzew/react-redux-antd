import { call, take } from 'redux-saga/effects';
import fetchRequest from '../helper/fetchHelper';
import { CREATE_EMPLOYEE } from '../actions/employeeAction';
import { lsitAsync } from './list';
export function* createAsync(data) {
  try {
    let result = yield call(fetchRequest, '/api/v1/addEmployee', 'post', data);
    if (result.code != 200) {
      alert(result.message);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchAddAsync() {
  while (true) {
    const { data } = yield take(CREATE_EMPLOYEE);
    yield call(createAsync, data);
    yield call(lsitAsync);
  }
}
