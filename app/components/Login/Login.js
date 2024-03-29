import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.scss';
import { Redirect } from 'react-router-dom';
import { Col, Row } from 'antd';
import LoginForm from '../Form/LoginForm/LoginForm';

//登录页面。
export default class Login extends Component {
  constructor() {
    super();
  }
  render() {
    return this.props.userName == '' ? (
      <div>
        <Col className="text-center xs-margin">
        </Col>
        <div className="login-container">
          <Row>
            <Col className="hidden-xs text-center" md={12} sm={12}>
              <img
                className="login-img"
              />
            </Col>
            <Col md={12} sm={24} className="form-padding">
              <div className="login-margin login-form-div">
                <div className="login-header">
                  <h3 className="login-h3">Log In</h3>
                </div>
                <LoginForm loginClick={this.props.loginClick} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}

Login.propTypes = {
  userName: PropTypes.string.isRequired
};
