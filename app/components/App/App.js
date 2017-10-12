import React, { Component } from 'react';
// import Body from '../Body/Body.js';
import Header from '../../containers/Header/Header.js';
import './App.css';
import NavTip from '../NavTip/NavTip';
import EmployeeList from '../../containers/EmployeeList/EmployeeList';
// import Footer from './Footer.js';
// import MoveRecords from './MoveRecords';
export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <NavTip title={'List'} />
          <EmployeeList />
        </div>
      </div>
    );
  }
}
