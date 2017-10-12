import { call, take } from 'redux-saga/effects';
import fetchRequest from '../helper/fetchHelper';
import { DELETE_EMPLOYEE } from '../actions/employeeAction';
// import { watchListAsync } from './list';
export function* listAsync(id) {
  const data = {
    id: id
  };
  try {
    let result = yield call(
      fetchRequest,
      '/api/v1/delEmployee',
      'delete',
      data
    );
    if (result.code != 200) {
      alert(result.message);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchDelAsync() {
  while (true) {
    const { id } = yield take(DELETE_EMPLOYEE);
    yield call(listAsync, id);
  }
}
