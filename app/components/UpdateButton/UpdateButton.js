import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import 'toastr/build/toastr.css';
import UpdateModal from '../UpdateModal/UpdateModal';
import { Button } from 'antd';

class UpdateButton extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }
  render() {
    const close = () => {
      this.setState({ showModal: false });
    };

    const open = () => {
      this.setState({ showModal: true });
      window.setTimeout(() => {
        $('#validateForm').validator();
      }, 10);
    };

    return (
      <div style={{ display: 'inline-block' }} key={this.props.employee._id}>
        <Button type="success" onClick={open}>
          Update
        </Button>
        <div>
          <UpdateModal
            showModal={this.state.showModal}
            close={close}
            employee={this.props.employee}
            updateEmployee={this.props.updateEmployee}
          />
        </div>
      </div>
    );
  }
}

UpdateButton.propTypes = {
  employee: PropTypes.object.isRequired,
  updateEmployee: PropTypes.func.isRequired
};

export default UpdateButton;
