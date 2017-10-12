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
      var data = listData.split('&');
      var json = {};
      for (var i = 0; i < data.length; i++) {
        var list = data[i].split('=');
        json[list[0]] = list[1];
      }
      JSON.stringify(json);
      console.log(json);
      dispatch(updateEmployee(json));
    }
  };
};

export default connect(null, mapDispatchToProps)(UpdateButton);
