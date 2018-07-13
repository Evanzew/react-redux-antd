import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import EmployeeList from '../../containers/EmployeeList/EmployeeList';
import Login from '../../containers/Login/Login';
import NotFound from '../NotFound/NotFound';
import AddEmployee from '../AddEmployee/AddEmployee';
import DataCharts from '../DataCharts/DataCharts';
export default class RouteApp extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (sessionStorage.getItem('data')) {
      this.props.getSessionUser();
    }
  }
  render() {
    return this.props.userName != '' || sessionStorage.getItem('data') ? (
      <div>
        <Switch>
          <Route exact path="/" component={EmployeeList} />
          {/*<Route path="/footer" component={Footer} />*/}
          {/*<Route path="/list" component={EmployeeList} />*/}
          <Route path="/new" component={AddEmployee} />
          <Route path="/login" component={Login} />
          <Route path="/charts" component={DataCharts} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </div>
    ) : (
      <Switch>
        <Route path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    );
  }
}
