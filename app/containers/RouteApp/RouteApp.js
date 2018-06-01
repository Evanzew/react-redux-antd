import React, { Component } from 'react';
import { connect } from 'react-redux';
import RouteAppComponent from '../../components/RouteApp/RouteApp';

class RouteApp extends Component {
  constructor() {
    super();
  }
  render() {
    return <RouteAppComponent userName={this.props.userName} />;
  }
}

const mapStateToProps = state => {
  const userName = state.user.userName;
  return { userName };
};

export default connect(mapStateToProps, null)(RouteApp);
