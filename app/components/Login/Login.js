import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
  constructor() {
    super();
  }
  render() {
    return this.props.userName == '' ? (
      <div className="container">
        <div className="col-xs-12 col-md-12 col-sm-12 text-center xs-margin">
          <img src={require('../../assets/perficient-logo.png')} />
        </div>
        <div className="login-container">
          <table>
            <tbody>
              <tr>
                <td className="hidden-xs col-md-6 col-sm-6">
                  <img
                    src={require('../../assets/log_right.png')}
                    className="login-img"
                  />
                </td>
                <td className="col-md-6 col-xs-12 col-sm-6">
                  <div id="login" className="login-margin login-form-div">
                    <div className="login-header">
                      <h3 className="login-h3">Log In</h3>
                    </div>

                    <form method="post" id="fm1">
                      <section className="row">
                        <div>
                          <input
                            className="cas-login-input"
                            id="username"
                            size="25"
                            type="text"
                            placeholder="User Name"
                            name="userName"
                            defaultValue="admin"
                          />
                          <input
                            className="cas-login-input"
                            id="password"
                            size="25"
                            type="password"
                            placeholder="Password"
                            name="passwprd"
                            defaultValue="123456"
                          />
                        </div>
                      </section>
                      <section className="row btn-row">
                        <button
                          className="btn btn-submit login-login"
                          onClick={e => {
                            e.preventDefault();
                            this.props.loginClick();
                          }}
                        >
                          Login
                        </button>
                        <button
                          className="btn btn-submit login-reset"
                          name="reset"
                          value="Reset"
                          type="Reset"
                        >
                          Reset
                        </button>
                      </section>
                    </form>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}

Login.propTypes = {
  userName: PropTypes.string.isRequired,
  loginClick: PropTypes.func.isRequired
};
