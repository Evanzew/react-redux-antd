import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { Redirect } from 'react-router-dom';
import { Row, Col } from 'antd';
import LoginForm from './LoginForm';

export default class Login extends Component {
  constructor() {
    super();
  }
  render() {
    return this.props.userName == '' ? (
      <div>
        <Row>
          <Col className="text-center xs-margin">
            <img src={require('../../assets/perficient-logo.png')} />
          </Col>
        </Row>
        <Row>
          <Col className="hidden-xs text-center" md={12} sm={12}>
            <img
              src={require('../../assets/log_right.png')}
              className="login-img"
            />
          </Col>
          <Col className="login-margin login-form-div" md={12} sm={12} xs={24}>
            <div className="login-header">
              <h3 className="login-h3">Log In</h3>
            </div>
            <LoginForm loginClick={this.props.loginClick} />
          </Col>
        </Row>
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}

Login.propTypes = {
  userName: PropTypes.string.isRequired
};
