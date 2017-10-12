import { call, take } from 'redux-saga/effects';
import fetchRequest from '../helper/fetchHelper';
import { UPDATE_EMPLOYEE } from '../actions/employeeAction';
export function* UpdateAsync(data) {
  try {
    let result = yield call(
      fetchRequest,
      '/api/v1/updateEmployee',
      'post',
      data
    );
    if (result.code != 200) {
      alert(result.message);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchUpdateAsync() {
  while (true) {
    const { data } = yield take(UPDATE_EMPLOYEE);
    yield call(UpdateAsync, data);
  }
}
