export const USER_LOGIN = 'USER_LOGIN';
export const IS_USER_LOGIN = 'IS_USER_LOGIN';

export const userLogin = userName => ({
  type: USER_LOGIN,
  userName
});

export const isUserLogin = data => ({
  type: IS_USER_LOGIN,
  data
});
