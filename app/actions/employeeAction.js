export const RECEIVE_EMPLOYEE_SUCCESS = 'RECEIVE_EMPLOYEE_SUCCESS';
export const RECEIVE_EMPLOYEE = 'RECEIVE_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
export const SORT_BY_FN = 'SORT_BY_FN';
export const SORT_BY_LN = 'SORT_BY_LN';
export const SEARCH_EMP_BY_OPTION = 'SEARCH_EMP_BY_OPTION';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const PAGE_NATION_EMPLOYEE = 'PAGE_NATION_EMPLOYEE';
export const receiveEmployeeSuccess = employee => ({
  type: RECEIVE_EMPLOYEE_SUCCESS,
  employee
});

export const sortEmpByFN = bool => ({
  type: SORT_BY_FN,
  bool
});

export const sortEmpByLN = bool => ({
  type: SORT_BY_LN,
  bool
});

export const receiveEmployee = () => ({
  type: RECEIVE_EMPLOYEE
});

export const deleteEmployee = id => ({
  type: DELETE_EMPLOYEE,
  id
});

export const createEmployee = data => ({
  type: CREATE_EMPLOYEE,
  data
});

export const searchEmpByOption = (option, content) => ({
  type: SEARCH_EMP_BY_OPTION,
  option,
  content
});

export const updateEmployee = data => ({
  type: UPDATE_EMPLOYEE,
  data
});

export const pageNationEmployee = index => ({
  type: PAGE_NATION_EMPLOYEE,
  index
});
// function fetchPosts() {
//   return dispatch => {
//     return fetch('/api/v1/employees')
//       .then(response => response.json())
//       .then(json => {
//         if (json.code == 200) {
//           dispatch(receiveEmployeeSuccess(json.data))
//           dispatch(receiveEmployee())
//         }
//         else {
//           return json.message;
//         }
//       })
//   }
// }

// async function fetchPosts() {
//   return dispatch => {
//     let response = await fetch('/api/v1/employees');
//     if (response.status >= 200 && response.status < 300) {
//       let json = await response.json();
//       if (json.code == 200) {
//         dispatch(receiveEmployeeSuccess(json.data))
//         dispatch(receiveEmployee())
//       }
//       else {
//         return json.message;
//       }
//       return json;
//     }
//   }
// }

// function shouldFetchPosts(state) {
//   const posts = state.employees;
//   if (posts.employee.length == 0) {
//     return true
//   } else if (posts.isFetching) {
//     return false
//   }
// }

// export function fetchPostsIfNeeded() {
//   return (dispatch, getState) => {
//     if (shouldFetchPosts(getState())) {
//       return dispatch(fetchPosts())
//     } else {
//       return true;
//     }
//   }
// }
