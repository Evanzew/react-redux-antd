import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEmployee } from '../../actions/employeeAction';
import CreateFormComponent from '../../components/CreateForm/CreateForm';

class CreateForm extends Component {
  constructor() {
    super();
  }
  render() {
    return <CreateFormComponent createEmployee={this.props.createEmployee} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createEmployee: listData => {
      var data = listData.split('&');
      var json = {};
      for (var i = 0; i < data.length; i++) {
        var list = data[i].split('=');
        json[list[0]] = list[1];
      }
      JSON.stringify(json);
      dispatch(createEmployee(json));
    }
  };
};

export default connect(null, mapDispatchToProps)(CreateForm);
