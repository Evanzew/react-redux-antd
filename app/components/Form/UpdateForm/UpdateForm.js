import React, { Component } from 'react';
import './UpdateForm.scss';
import { Form, Icon, Input, Select, DatePicker } from 'antd';
import moment from 'moment';
const FormItem = Form.Item;
const Option = Select.Option;

class UpdateForm extends Component {
  componentDidMount() {
    this.props.form.validateFields();
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    let beforeBirth = this.props.employee.Birth;
    const dateFormat = 'YYYY/MM/DD';
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86'
    })(
      <Select>
        <Option value="86">+86</Option>
        <Option value="87">+001</Option>
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
// const UpdateModelComponent = Form.create({
//   componentDidMount() {
//     this.this.props.form.validateFields();
//   },
//   onFieldsChange(this.props, changedFields) {
//     this.props.onChange(changedFields);
//   },
//   mapthis.propsToFields(this.props) {
//     return {
//       _id: Form.createFormField(this.props.employee._id),
//       First_Name: Form.createFormField(this.props.employee.First_Name),
//       Last_Name: Form.createFormField(this.props.employee.Last_Name),
//       Gender: Form.createFormField(this.props.employee.Gender),
//       Birth: Form.createFormField(this.props.employee.Birth),
//       Address: Form.createFormField(this.props.employee.Address),
//       Phone: Form.createFormField(this.props.employee.Phone)
//     };
//   },
//   onValuesChange(_, values) {
//     console.log(values);
//   }
// })(this.props => {
//   const { getFieldDecorator } = this.props.form;
//   return (
//     <Form className="login-form">
//       <FormItem>
//         {getFieldDecorator('_id', {
//           initialValue: this.props.employee._id
//         })(<Input type="hidden" />)}
//       </FormItem>
//       <FormItem>
//         {getFieldDecorator('First_Name', {
//           initialValue: this.props.employee.First_Name
//         })(
//           <Input
//             readOnly
//             prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//           />
//         )}
//       </FormItem>
//       <FormItem>
//         {getFieldDecorator('Last_Name', {
//           initialValue: this.props.employee.Last_Name
//         })(
//           <Input
//             readOnly
//             prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//           />
//         )}
//       </FormItem>
//       <FormItem>
//         {getFieldDecorator('Gender', {
//           initialValue: this.props.employee.Gender
//         })(
//           <Input
//             readOnly
//             prefix={<Icon type="team" style={{ color: 'rgba(0,0,0,.25)' }} />}
//           />
//         )}
//       </FormItem>
//       <FormItem>
//         {getFieldDecorator('Birth', {
//           initialValue: this.props.employee.Birth
//         })(
//           <Input
//             readOnly
//             prefix={
//               <Icon type="calendar" style={{ color: 'rgba(0,0,0,.25)' }} />
//             }
//           />
//         )}
//       </FormItem>
//       <FormItem hasFeedback>
//         {getFieldDecorator('Address', {
//           initialValue: this.props.employee.Address,
//           rules: [{ required: true, message: 'Sorry,address is required' }]
//         })(
//           <Input
//             prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
//           />
//         )}
//       </FormItem>
//       <FormItem hasFeedback>
//         {getFieldDecorator('Phone', {
//           initialValue: this.props.employee.Phone,
//           rules: [
//             { required: true, message: 'Sorry,Phone is required' },
//             {
//               pattern: /^([1]+[3,5,7,8]+\d{9}$)/,
//               message: 'Sorry,phone number is invalid'
//             }
//           ]
//         })(
//           <Input
//             prefix={<Icon type="Phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
//           />
//         )}
//       </FormItem>
//     </Form>
//   );
// });
const UpdateFormComponent = Form.create()(UpdateForm);
export default UpdateFormComponent;
