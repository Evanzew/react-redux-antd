import {
  RECEIVE_EMPLOYEE_SUCCESS,
  RECEIVE_EMPLOYEE,
  DELETE_EMPLOYEE,
  CREATE_EMPLOYEE,
  SORT_BY_FN,
  SORT_BY_LN,
  SEARCH_EMP_BY_OPTION,
  UPDATE_EMPLOYEE,
  PAGE_NATION_EMPLOYEE
} from '../actions/employeeAction';

let initialEmployee = {
  pageNation: {
    index: 1,
    page: 0,
    pageCount: 5
  },
  sortByFn: false,
  sortByLn: false,
  isFetching: false,
  employee: [],
  allEmployee: [],
  lastDeleteId: 0,
  newEmployee: [],
  searchJSON: {}
};

let sort_by = function(field, reverse, primer) {
  var key = primer
    ? function(x) {
        return primer(x[field]);
      }
    : function(x) {
        return x[field];
      };

  reverse = !reverse ? 1 : -1;

  return function(a, b) {
    return (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a));
  };
};

const concatList = (id, list) => {
  let index = 0;
  for (var key in list) {
    if (list[key]._id == id) {
      index = parseInt(key);
    }
  }
  let employee = list.slice(0, index).concat(list.slice(index + 1));
  return employee;
};

const updateList = (data, list) => {
  let index = 0;
  for (var key in list) {
    if (list[key]._id == data._id) {
      index = parseInt(key);
    }
  }
  let concatList = list.slice(index + 1);
  list = list.slice(0, index);
  list.push(data);
  let employee = list.concat(concatList);
  console.log(index);
  return employee;
};

function searchJson(option, content) {
  var json = {};
  json[option] = content;
  return json;
}

export default function employees(state = initialEmployee, action) {
  switch (action.type) {
    case RECEIVE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        allEmployee: action.employee,
        employee: action.employee.slice(0, state.pageNation.pageCount),
        pageNation: {
          ...state.pageNation,
          page: Math.ceil(action.employee.length / state.pageNation.pageCount)
        }
      };
    case RECEIVE_EMPLOYEE:
      return { ...state, isFetching: true };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        allEmployee: concatList(action.id, state.allEmployee),
        employee: concatList(action.id, state.allEmployee).slice(
          (state.pageNation.index - 1) * state.pageNation.pageCount,
          state.pageNation.index * state.pageNation.pageCount
        ),
        pageNation: {
          ...state.pageNation,
          page: Math.ceil(
            (state.allEmployee.length - 1) / state.pageNation.pageCount
          )
        }
      };
    case CREATE_EMPLOYEE:
      return {
        ...state,
        newEmployee: state.newEmployee.splice(
          0,
          state.newEmployee.length,
          action.data
        )
      };
    case SORT_BY_FN:
      return {
        ...state,
        sortByFn: !state.sortByFn,
        sortByLn: false,
        employee: state.employee
          .sort(
            sort_by('First_Name', state.sortByFn, function(a) {
              return a.toUpperCase();
            })
          )
          .slice(0, state.employee.length)
      };
    case SORT_BY_LN:
      return {
        ...state,
        sortByFn: false,
        sortByLn: !state.sortByLn,
        employee: state.employee
          .sort(
            sort_by('Last_Name', state.sortByLn, function(a) {
              return a.toUpperCase();
            })
          )
          .slice(0, state.employee.length)
      };
    case SEARCH_EMP_BY_OPTION:
      return {
        ...state,
        searchJson: searchJson(action.option, action.content)
      };
    case UPDATE_EMPLOYEE:
      return {
        ...state,
        employee: updateList(action.data, state.employee)
      };
    case PAGE_NATION_EMPLOYEE:
      return {
        ...state,
        pageNation: {
          ...state.pageNation,
          index: action.index
        },
        employee: state.allEmployee.slice(
          (action.index - 1) * state.pageNation.pageCount,
          action.index * state.pageNation.pageCount
        )
      };
    default:
      return state;
  }
}
