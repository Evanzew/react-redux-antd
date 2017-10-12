import './index.css';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'babel-polyfill';
import React from 'react';
import RouteApp from './components/RouteApp/RouteApp';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store/createStore';
import 'bootstrap-validator';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route component={RouteApp} />
    </Router>
  </Provider>,
  document.getElementById('react-root')
);
