import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeListComponent from '../../components/EmployeeList/EmployeeList';
import {
  receiveEmployee,
  // receiveEmployeeSuccess,
  pageNationEmployee,
  sortEmpByFN,
  sortEmpByLN
} from '../../actions/employeeAction';

class EmployeeList extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <EmployeeListComponent
        employees={this.props.employees}
        index={this.props.index}
        pages={this.props.pages}
        changeIndex={this.props.changeIndex}
        getAll={this.props.getAll}
        sortByFN={this.props.sortByFN}
        sortByLN={this.props.sortByLN}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = state.employees.employee;
  const pages = state.employees.pageNation.page;
  const index = state.employees.pageNation.index;
  return {
    employees,
    pages,
    index
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeIndex: eventKey => {
      dispatch(pageNationEmployee(eventKey));
    },
    getAll: () => {
      dispatch(receiveEmployee());
    },
    sortByFN: () => {
      dispatch(sortEmpByFN());
    },
    sortByLN: () => {
      dispatch(sortEmpByLN());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
