import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isUserLogin } from '../../actions/loginAction';
import LoginComponent from '../../components/Login/Login';

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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
