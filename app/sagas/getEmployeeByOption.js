import { call, take, put } from 'redux-saga/effects';
import fetchRequest from '../helper/fetchHelper';
import {
  receiveEmployeeSuccess,
  SEARCH_EMP_BY_OPTION
} from '../actions/employeeAction';
export function* findAsync(option, content) {
  var data = {
    option: option,
    content: content
  };
  try {
    let result = yield call(fetchRequest, '/api/v1/findEmployee', 'post', data);
    yield put(receiveEmployeeSuccess(result.data));
    if (result.code != 200) {
      alert(result.message);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchFindAsync() {
  while (true) {
    const { option, content } = yield take(SEARCH_EMP_BY_OPTION);
    yield call(findAsync, option, content);
    // yield call(watchListAsync);
  }
}
