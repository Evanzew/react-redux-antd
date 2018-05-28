import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEmployee } from '../../actions/employeeAction';
import CreateFormComponent from '../../components/Form/CreateForm/CreateForm';

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
    createEmployee: data => {
      dispatch(createEmployee(data));
    }
  };
};

export default connect(null, mapDispatchToProps)(CreateForm);
