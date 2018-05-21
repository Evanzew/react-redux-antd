import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateEmployee } from '../../actions/employeeAction';
import UpdateButtonComponent from '../../components/UpdateButton/UpdateButton';

class UpdateButton extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <UpdateButtonComponent
        updateEmployee={this.props.updateEmployee}
        employee={this.props.employee}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateEmployee: listData => {
      dispatch(updateEmployee(listData));
    }
  };
};

export default connect(null, mapDispatchToProps)(UpdateButton);
