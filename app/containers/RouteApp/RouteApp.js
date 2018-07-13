import React, { Component } from 'react';
import { connect } from 'react-redux';
import RouteAppComponent from '../../components/RouteApp/RouteApp';
import { isUserLogin } from '../../actions/loginAction';
class RouteApp extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <RouteAppComponent
        userName={this.props.userName}
        getSessionUser={this.props.getSessionUser}
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
    getSessionUser: () => {
      dispatch(isUserLogin(JSON.parse(sessionStorage.getItem('data'))));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteApp);
