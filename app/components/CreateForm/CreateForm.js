import React, { Component } from 'react';
import {
  Form,
  Icon,
  Input,
  Select,
  Alert,
  DatePicker,
  Button,
  Col,
  Row,
  Modal
} from 'antd';
import './CreateForm.css';
const FormItem = Form.Item;
const Option = Select.Option;

class CreateFormComponent extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      confirmLoading: false
    };
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const rowGutter = { xs: 8, sm: 16, md: 24, lg: 32 };
    const showModal = () => {
      this.props.form.validateFields(err => {
        if (!err) {
          this.setState({
            visible: true
          });
        }
      });
    };
    const handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          this.setState({
            confirmLoading: true
          });
          window.setTimeout(() => {
            this.setState({
              visible: false,
              confirmLoading: false
            });
            values['Birth'] = values['Birth'].format('YYYY-MM-DD');
            this.props.createEmployee(values);
            this.props.form.resetFields();
          }, 2000);
        }
      });
    };
    const handleCancel = () => {
      this.setState({
        visible: false
      });
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86'
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+001</Option>
      </Select>
    );

    return (
      <Form id="createForm" className="login-form" onSubmit={handleSubmit}>
        <Row gutter={rowGutter}>
          <Col lg={12}>
            <FormItem hasFeedback>
              {getFieldDecorator('First_Name', {
                rules: [
                  { required: true, message: 'Sorry, first name is required' },
                  {
                    pattern: /^[a-zA-Z]{2,20}$/,
                    message: 'Sorry,first name is invalid'
                  }
                ]
              })(
                <Input
                  placeholder="First Name"
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                />
              )}
            </FormItem>
          </Col>
          <Col lg={12}>
            <Alert
              message="Name shoule to be composed of 2-20 English letters."
              type="info"
            />
          </Col>
        </Row>
        <Row gutter={rowGutter}>
          <Col lg={12}>
            <FormItem hasFeedback>
              {getFieldDecorator('Last_Name', {
                rules: [
                  { required: true, message: 'Sorry, last name is required' },
                  {
                    pattern: /^[a-zA-Z]{2,20}$/,
                    message: 'Sorry,last name is invalid'
                  }
                ]
              })(
                <Input
                  placeholder="Last Name"
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                />
              )}
            </FormItem>
          </Col>
          <Col lg={12}>
            <Alert
              message="Name shoule to be composed of 2-20 English letters."
              type="info"
            />
          </Col>
        </Row>
        <Row gutter={rowGutter}>
          <Col lg={12}>
            <FormItem hasFeedback>
              {getFieldDecorator('Gender', {
                rules: [
                  { required: true, message: 'Sorry, gender is required' }
                ]
              })(
                <Select placeholder="Please Choose Gender">
                  <Option value="M">Male</Option>
                  <Option value="F">Famale</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col lg={12}>
            <Alert message="You should select gender." type="info" />
          </Col>
        </Row>

        <Row gutter={rowGutter}>
          <Col lg={12}>
            <FormItem hasFeedback>
              {getFieldDecorator('Birth', {
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
          </Col>

          <Col lg={12}>
            <Alert message="Please select birth day." type="info" />
          </Col>
        </Row>
        <Row gutter={rowGutter}>
          <Col lg={12}>
            <FormItem hasFeedback>
              {getFieldDecorator('Address', {
                rules: [
                  { required: true, message: 'Sorry,address is required' }
                ]
              })(
                <Input
                  placeholder="Address"
                  prefix={
                    <Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                />
              )}
            </FormItem>
          </Col>
          <Col lg={12}>
            <Alert message="Address is required." type="info" />
          </Col>
        </Row>
        <Row gutter={rowGutter}>
          <Col lg={12}>
            <FormItem hasFeedback>
              {getFieldDecorator('Phone', {
                rules: [
                  { required: true, message: 'Sorry,Phone is required' },
                  {
                    pattern: /^([1]+[3,5,7,8]+\d{9}$)/,
                    message: 'Sorry,phone number is invalid'
                  }
                ]
              })(
                <Input
                  placeholder="Phone"
                  addonBefore={prefixSelector}
                  prefix={
                    <Icon type="Phone" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                />
              )}
            </FormItem>
          </Col>
          <Col lg={12}>
            <Alert
              message="Phone should to be composed of 11 digit number."
              type="info"
            />
          </Col>
        </Row>
        <FormItem>
          <Col lg={{ span: 8, offset: 2 }} md={24}>
            <Button
              style={{ display: 'block', width: '100%' }}
              onClick={showModal}
              type="primary"
            >
              Create
            </Button>
          </Col>
        </FormItem>
        <Modal
          title="Attention"
          visible={this.state.visible}
          confirmLoading={this.state.confirmLoading}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Cancle
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={this.state.confirmLoading}
              onClick={handleSubmit}
              htmlType="submit"
            >
              Create
            </Button>
          ]}
        >
          Please confirm whether you really want to create this employee.
        </Modal>
      </Form>
    );
  }
}

const CreateForm = Form.create()(CreateFormComponent);
export default CreateForm;
