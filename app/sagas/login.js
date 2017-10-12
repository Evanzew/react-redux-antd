import { call, put, take } from 'redux-saga/effects';
import fetchRequest from '../helper/fetchHelper';
import { userLogin, IS_USER_LOGIN, isUserLogin } from '../actions/loginAction';
import $ from 'jquery';

export function* loginAsync() {
  const data = {
    userName: $('#username').val(),
    password: $('#password').val()
  };
  try {
    if (data.userName !== undefined) {
      let result = yield call(fetchRequest, '/api/v1/login', 'POST', data);
      if (result.code == 200) {
        yield put(userLogin(result.data.User_Name));
      } else if (result.code == 801) {
        alert(result.message);
        yield put(isUserLogin(false));
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchLoginAsync() {
  while (true) {
    yield take(IS_USER_LOGIN);
    yield call(loginAsync);
  }
}
