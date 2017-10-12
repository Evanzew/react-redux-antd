import React, { Component } from 'react';
import NavTip from '../NavTip/NavTip';
import Header from '../../containers/Header/Header.js';
import Form from '../../containers/CreateForm/CreateForm';

export default class AddEmployee extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <NavTip title={'NewEmployee'} />
          <Form />
        </div>
      </div>
    );
  }
}
