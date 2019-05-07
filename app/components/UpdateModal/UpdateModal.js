import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';
import 'toastr/build/toastr.css';
import UpdateForm from '../Form/UpdateForm/UpdateForm';
let employeeFormValue;
//点击update的时候弹出的模态框。
class UpdateModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const handleSubmit = e => {
      e.preventDefault();
      employeeFormValue.validateFields((err, values) => {
        if (!err) {
          this.props.handleOk(values);
        }
      });
    };

    return (
      <Modal
        title="Attention"
        visible={this.props.visible}
        confirmLoading={this.props.confirmLoading}
        onCancel={this.props.handleCancel}
        footer={[
          <Button key="back" onClick={this.props.handleCancel}>
            Cancle
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={this.props.confirmLoading}
            onClick={handleSubmit}
            htmlType="submit"
          >
            Update
          </Button>
        ]}
      >
        <UpdateForm
          employee={this.props.employee}
          ref={node => {
            employeeFormValue = node;
          }}
        />
      </Modal>
    );
  }
}

UpdateModal.propTypes = {
  handleOk: PropTypes.func.isRequired,
  employee: PropTypes.object.isRequired,
  handleCancel: PropTypes.func.isRequired,
  confirmLoading: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired
};

export default UpdateModal;
