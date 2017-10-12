export const USER_LOGIN = 'USER_LOGIN';
export const IS_USER_LOGIN = 'IS_USER_LOGIN';

export const userLogin = userName => ({
  type: USER_LOGIN,
  userName
});

export const isUserLogin = bool => ({
  type: IS_USER_LOGIN,
  bool
});

// export function fetchLogin() {
//   const data = {
//     userName: $('#username').val(),
//     password: $('#password').val()
//   }
//   const fetchOptions = {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'csrf-token': $('input[name="_csrf"]').val()
//     },
//     body: JSON.stringify(data),
//     credentials: 'same-origin'
//   };
//   return dispatch => {
//     return fetch('/api/v1/login', fetchOptions)
//       .then(response => response.json())
//       .then(json => {
//         if (json.code == 200) {
//           dispatch(userLogin(json.data.User_Name));
//         }
//         else {
//           alert(json.message);
//         }
//       })
//   }
// }
