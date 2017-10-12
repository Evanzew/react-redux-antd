import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import './DeleteButton.css';
import * as toastr from 'toastr';
import 'toastr/build/toastr.css';

class DeleteButton extends Component {
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
    };
    return (
      <div className="display-line">
        <Button bsStyle="danger" onClick={open}>
          Delete
        </Button>
        <div>
          <Modal show={this.state.showModal} onHide={close}>
            <Modal.Header closeButton>
              <Modal.Title className="modal-title text-warning">
                Attention
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-danger">
              Please confirm whether you really want to delete this employee!!
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={e => {
                  e.preventDefault();
                  this.setState({ showModal: false });
                  this.props.deleteClick(this.props.id);
                  toastr.error('Employee Successfully Deleted!', 'Deleted');
                }}
              >
                Delete
              </Button>
              <Button bsStyle="danger" onClick={close}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

DeleteButton.propTypes = {
  deleteClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default DeleteButton;
