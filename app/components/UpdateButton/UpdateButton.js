import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Button,
  Modal,
  Form,
  FormControl,
  FormGroup,
  InputGroup,
  Glyphicon
} from 'react-bootstrap';
import * as toastr from 'toastr';
import $ from 'jquery';
import 'toastr/build/toastr.css';

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
      <div className="display-line">
        <Button bsStyle="success" onClick={open}>
          Update
        </Button>
        <div>
          <Modal show={this.state.showModal} onHide={close}>
            <Form data-toggle="validator" role="form" id="validateForm">
              <Modal.Header closeButton>
                <Modal.Title className="modal-title text-warning">
                  Attention
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="text-danger">
                <div className="clearfix">
                  <FormControl
                    type="hidden"
                    name="_id"
                    defaultValue={this.props.employee._id}
                  />
                  <FormGroup>
                    <Col md={10} mdOffset={1}>
                      <InputGroup>
                        <InputGroup.Addon>
                          <Glyphicon glyph="user" />
                        </InputGroup.Addon>
                        <FormControl
                          name="First_Name"
                          defaultValue={this.props.employee.First_Name}
                          readOnly
                        />
                      </InputGroup>
                      <Glyphicon
                        glyph=""
                        className="form-control-feedback"
                        aria-hidden="true"
                      />
                      <div className="help-block with-errors" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col md={10} mdOffset={1}>
                      <InputGroup>
                        <InputGroup.Addon>
                          <Glyphicon glyph="user" />
                        </InputGroup.Addon>
                        <FormControl
                          name="Last_Name"
                          defaultValue={this.props.employee.Last_Name}
                          readOnly
                        />
                      </InputGroup>
                      <Glyphicon
                        glyph=""
                        className="form-control-feedback"
                        aria-hidden="true"
                      />
                      <div className="help-block with-errors" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col md={10} mdOffset={1}>
                      <InputGroup>
                        <InputGroup.Addon>
                          <Glyphicon glyph="user" />
                        </InputGroup.Addon>
                        <FormControl
                          name="Gender"
                          defaultValue={this.props.employee.Gender}
                          readOnly
                        />
                      </InputGroup>
                      <Glyphicon
                        glyph=""
                        className="form-control-feedback"
                        aria-hidden="true"
                      />
                      <div className="help-block with-errors" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col md={10} mdOffset={1}>
                      <InputGroup>
                        <InputGroup.Addon>
                          <Glyphicon glyph="calendar" />
                        </InputGroup.Addon>
                        <FormControl
                          name="Birth"
                          defaultValue={this.props.employee.Birth}
                          readOnly
                        />
                      </InputGroup>
                      <Glyphicon
                        glyph=""
                        className="form-control-feedback"
                        aria-hidden="true"
                      />
                      <div className="help-block with-errors" />
                    </Col>
                  </FormGroup>
                  <FormGroup className="has-feedback">
                    <Col md={10} mdOffset={1}>
                      <InputGroup>
                        <InputGroup.Addon>
                          <Glyphicon glyph="home" />
                        </InputGroup.Addon>
                        <FormControl
                          name="Address"
                          defaultValue={this.props.employee.Address}
                          data-error="Sorry,address is required"
                          required
                        />
                      </InputGroup>
                      <Glyphicon
                        glyph=""
                        className="form-control-feedback"
                        aria-hidden="true"
                      />
                      <div className="help-block with-errors" />
                    </Col>
                  </FormGroup>
                  <FormGroup className="has-feedback">
                    <Col md={10} mdOffset={1}>
                      <InputGroup>
                        <InputGroup.Addon>
                          <Glyphicon glyph="phone" />
                        </InputGroup.Addon>
                        <FormControl
                          name="Phone"
                          defaultValue={this.props.employee.Phone}
                          pattern="^([1]+[3,5,7,8]+\d{9}$)"
                          data-error="Sorry,phone number is invalid"
                          required
                        />
                      </InputGroup>
                      <Glyphicon
                        glyph=""
                        className="form-control-feedback"
                        aria-hidden="true"
                      />
                      <div className="help-block with-errors" />
                    </Col>
                  </FormGroup>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  type="submit"
                  bsStyle="primary"
                  onClick={() => {
                    const updateTemplate = () => {
                      this.props.updateEmployee($('#validateForm').serialize());
                    };
                    $('#validateForm')
                      .validator()
                      .on('submit', function(e) {
                        if (e.isDefaultPrevented()) {
                          return;
                        } else {
                          e.preventDefault();
                          close();
                          toastr.success(
                            'Employee Successfully Updated!',
                            'Updated'
                          );
                          updateTemplate();
                        }
                      });
                  }}
                >
                  Update
                </Button>
                <Button onClick={close}>Close</Button>
              </Modal.Footer>
            </Form>
          </Modal>
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
