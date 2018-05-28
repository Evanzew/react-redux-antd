import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
const FromItem = Form.Item;
class LoginForm extends Component {
  constructor() {
    super();
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          this.props.loginClick(values);
        }
      });
    };
    const handleReset = e => {
      e.preventDefault();
      this.props.form.resetFields();
    };
    return (
      <Form onSubmit={handleSubmit} className="login-form">
        <FromItem>
          {getFieldDecorator('userName', { initialValue: 'Evan.Zou' })(
            <Input className="cas-login-input" placeholder="User Name" />
          )}
        </FromItem>
        <FromItem>
          {getFieldDecorator('password', { initialValue: '123' })(
            <Input
              className="cas-login-input"
              type="password"
              placeholder="Password"
            />
          )}
        </FromItem>
        <FromItem>
          <Button htmlType="submit" className="login-login" type="primary">
            Login
          </Button>
          <Button
            htmlType="reset"
            className="login-reset"
            onClick={handleReset}
          >
            Reset
          </Button>
        </FromItem>
      </Form>
    );
  }
}

const LoginFormComponent = Form.create()(LoginForm);
export default LoginFormComponent;

LoginForm.propTypes = {
  loginClick: PropTypes.func.isRequired
};
