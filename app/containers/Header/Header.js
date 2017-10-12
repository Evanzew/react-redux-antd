import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin, isUserLogin } from '../../actions/loginAction';
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
      />
    );
  }
}

const mapStateToProps = state => {
  const userName = state.user.userName;
  return {
    userName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutClick: () => {
      dispatch(isUserLogin(false));
      dispatch(userLogin(''));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
