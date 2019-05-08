import React, { Component } from 'react';
import './UpdateForm.scss';
import { Form, Icon, Input, Select, DatePicker } from 'antd';
import moment from 'moment';
const FormItem = Form.Item;
const Option = Select.Option;

//更新员工信息的form，是在点击员工list的各个员工的update button的时候调用。
class UpdateForm extends Component {
  componentDidMount() {
    this.props.form.validateFields();
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    let beforeBirth = this.props.employee.Birth;
    const dateFormat = 'YYYY/MM/DD';
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: this.props.employee.prefix
    })(
      <Select>
        <Option value="86">+86</Option>
        <Option value="001">+001</Option>
      </Select>
    );
    return (
      <Form className="login-form">
        <FormItem>
          {getFieldDecorator('_id', {
            initialValue: this.props.employee._id
          })(<Input type="hidden" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('First_Name', {
            initialValue: this.props.employee.First_Name
          })(
            <Input
              readOnly
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('Last_Name', {
            initialValue: this.props.employee.Last_Name
          })(
            <Input
              readOnly
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('Gender', {
            initialValue: this.props.employee.Gender
          })(
            <Input
              readOnly
              prefix={<Icon type="team" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
          )}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('Birth', {
            initialValue: moment(beforeBirth, dateFormat),
            rules: [
              {
                type: 'object',
                required: true,
                message: 'Please select birth day!'
              }
            ]
          })(
            <DatePicker
              format="YYYY-MM-DD"
              style={{ width: '100%' }}
              placeholder="Select Birth"
            />
          )}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('Address', {
            initialValue: this.props.employee.Address,
            rules: [{ required: true, message: 'Sorry,address is required' }]
          })(
            <Input
              prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
          )}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('Phone', {
            initialValue: this.props.employee.Phone,
            rules: [
              { required: true, message: 'Sorry,phone number is required' },
              {
                pattern: /^([1]+[3,5,7,8]+\d{9}$)/,
                message: 'Sorry,phone number is invalid'
              }
            ]
          })(
            <Input
              addonBefore={prefixSelector}
              prefix={
                <Icon type="Phone" style={{ color: 'rgba(0,0,0,.25)' }} />
              }
            />
          )}
        </FormItem>
      </Form>
    );
  }
}
const UpdateFormComponent = Form.create()(UpdateForm);
export default UpdateFormComponent;
