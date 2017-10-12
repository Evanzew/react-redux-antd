import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import EmployeeList from '../../containers/EmployeeList/EmployeeList';
import Login from '../../containers/Login/Login';
import NotFound from '../NotFound/NotFound';
import AddEmployee from '../AddEmployee/AddEmployee';
export default class RouteApp extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={EmployeeList} />
          {/*<Route path="/footer" component={Footer} />*/}
          {/*<Route path="/list" component={EmployeeList} />*/}
          <Route path="/new" component={AddEmployee} />
          <Route path="/login" component={Login} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </div>
    );
  }
}
