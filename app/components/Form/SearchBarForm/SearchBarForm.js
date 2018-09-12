import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
class SearchBarForm extends Component {
  constructor() {
    super();
  }
  render() {
    const handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          this.props.searchByOption(
            values['searchInput'],
            values['searchContent']
          );
        }
      });
    };
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline" onSubmit={handleSubmit}>
        <FormItem label="Content">
          {getFieldDecorator('searchContent')(
            <Input placeholder="Please enter the content" />
          )}
        </FormItem>
        <FormItem label="Options">
          {getFieldDecorator('searchInput', {
            initialValue: 'First_Name'
          })(
            <Select style={{ width: '200px' }}>
              <Option value="First_Name">FirstName</Option>
              <Option value="Last_Name">LastName</Option>
            </Select>
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" style={{ marginTop: '4px' }}>
            Search
          </Button>
        </FormItem>
      </Form>
    );
  }
}

SearchBarForm.propTypes = {
  searchByOption: PropTypes.func.isRequired
};
const SearchBarFormComponentr = Form.create()(SearchBarForm);
export default SearchBarFormComponentr;
