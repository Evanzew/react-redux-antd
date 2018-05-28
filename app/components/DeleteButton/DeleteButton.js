import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './DeleteButton.css';
import * as toastr from 'toastr';
import 'toastr/build/toastr.css';
import { Popconfirm, Button } from 'antd';

export default class DeleteButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    function confirm() {
      toastr.error('Employee Successfully Deleted!', 'Deleted');
    }
    const text =
      'Please confirm whether you really want to delete this employee!!';
    return (
      <Fragment key={this.props.index}>
        <Popconfirm
          placement="topLeft"
          title={text}
          onConfirm={e => {
            e.preventDefault();
            this.props.deleteClick(
              this.props.id,
              this.props.index,
              this.props.employee
            );
            confirm();
          }}
          okText="Yes"
          cancelText="No"
        >
          <Button type="danger">Delete</Button>
        </Popconfirm>
      </Fragment>
    );
  }
}

DeleteButton.propTypes = {
  deleteClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  employee: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired
};
