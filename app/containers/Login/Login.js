import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isUserLogin } from '../../actions/loginAction';
import { searchEmpByOption } from '../../actions/employeeAction';
import LoginComponent from '../../components/Login/Login';
// import * as toastr from 'toastr';

class Login extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <LoginComponent
        userName={this.props.userName}
        loginClick={this.props.loginClick}
      />
    );
  }
}

const mapStateToProps = state => {
  const userName = state.user.userName;
  return { userName };
};

const mapDispatchToProps = dispatch => {
  return {
    loginClick: data => {
      dispatch(isUserLogin(data));
      dispatch(searchEmpByOption('First_Name', ''));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
