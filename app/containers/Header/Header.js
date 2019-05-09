import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin, isUserLogin } from '../../actions/loginAction';
import { receiveEmployeeSuccess } from '../../actions/employeeAction';
import * as toastr from 'toastr';
import HeaderComponent from '../../components/Header/Header';

class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <HeaderComponent
        userName={this.props.userName}
        logoutClick={this.props.logoutClick}
        resetList={this.props.resetList}
        current={this.props.current}
      />
    );
  }
}

const mapStateToProps = state => {
  let userSessionName;
  if (sessionStorage.getItem('data')) {
    userSessionName = JSON.parse(sessionStorage.getItem('data')).userName;
  } else {
    userSessionName = null;
  }
  const userName = userSessionName || state.user.userName;
  return {
    userName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutClick: () => {
      dispatch(isUserLogin({}));
      dispatch(userLogin(''));
      dispatch(receiveEmployeeSuccess([]));
      sessionStorage.removeItem('data');
      toastr.success('Logout Success!');
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
