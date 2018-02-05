import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  deleteEmployee,
  pageNationEmployee
} from '../../actions/employeeAction';
import DeleteButtonComponent from '../../components/DeleteButton/DeleteButton';

class DeleteButton extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <DeleteButtonComponent
        id={this.props.id}
        employee={this.props.employee}
        index={this.props.index}
        deleteClick={this.props.deleteClick}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    employee: state.employees.employee,
    index: state.employees.pageNation.index
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteClick: (id, index, employee) => {
      console.log(employee.length);
      dispatch(deleteEmployee(id));
      if (employee.length - 1 == 0) {
        var currentIndex = index - 1;
        dispatch(pageNationEmployee(currentIndex));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);
