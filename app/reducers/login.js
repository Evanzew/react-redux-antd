import { USER_LOGIN, IS_USER_LOGIN } from '../actions/loginAction';

let initialUser = {
  isUserLogin: false,
  userName: ''
};

export default function user(state = initialUser, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, userName: action.userName };
    case IS_USER_LOGIN:
      return { ...state, isUserLogin: action.bool };
    default:
      return state;
  }
}
