import React, { Component } from 'react';
import 'bootstrap-validator';
import './CreateForm.css';
import PropTypes from 'prop-types';
import DatePicker from 'react-bootstrap-date-picker';
import {
  Button,
  Modal,
  Alert,
  Row,
  Form,
  Col,
  FormGroup,
  InputGroup,
  Glyphicon,
  FormControl
} from 'react-bootstrap';
import $ from 'jquery';
import './CreateForm.css';
import * as toastr from 'toastr';
import 'toastr/build/toastr.css';

class CreateForm extends Component {
  constructor() {
    super();
    this.state = { value: new Date().toISOString(), showModal: false };
  }

  render() {
    const open = () => {
      this.setState({ showModal: true });
    };
    const close = () => {
      this.setState({ showModal: false });
    };
    const handleChange = (value, formattedValue) => {
      this.setState({
        value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
        formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
      });

      $('#date-picker-popover-0 td').on('click', function() {
        window.setTimeout(() => {
          $('#Birth').validator('validate');
        }, 10);
      });
    };
    $(function() {
      $('#example-datepicker_group input:first-child').attr({
        'data-error': 'Sorry,Birth is invalid',
        pattern:
          '^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$'
      });
      $('#validateForm')
        .validator()
        .on('submit', function(e) {
          if (e.isDefaultPrevented()) {
            return;
          } else {
            e.preventDefault();
            open();
          }
        });
    });
    return (
      <Form data-toggle="validator" role="form" id="validateForm">
        <Col md={12}>
          <Row>
            <FormGroup className="has-feedback">
              <Col md={6}>
                <InputGroup>
                  <InputGroup.Addon>
                    <Glyphicon glyph="user" />
                  </InputGroup.Addon>
                  <FormControl
                    placeholder="FirstName"
                    name="First_Name"
                    pattern="^[a-zA-Z]{2,20}$"
                    data-error="Sorry,number is invalid"
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
            <Col md={6}>
              <Alert bsStyle="info" className="alert-padding">
                <b>Attention:</b>
                Name shoule to be composed of 2-20 English letters.
              </Alert>
            </Col>
          </Row>
          <Row>
            <FormGroup className="has-feedback">
              <Col md={6}>
                <InputGroup>
                  <InputGroup.Addon>
                    <Glyphicon glyph="user" />
                  </InputGroup.Addon>
                  <FormControl
                    placeholder="LastName"
                    name="Last_Name"
                    pattern="^[a-zA-Z]{2,20}$"
                    data-error="Sorry,number is invalid"
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
            <Col md={6}>
              <Alert bsStyle="info" className="alert-padding">
                <b>Attention:</b>
                Name shoule to be composed of 2-20 English letters.
              </Alert>
            </Col>
          </Row>
          <Row>
            <FormGroup className="has-feedback">
              <Col md={6}>
                <InputGroup>
                  <InputGroup.Addon>
                    <Glyphicon glyph="user" />
                  </InputGroup.Addon>
                  <FormControl
                    name="Gender"
                    componentClass="select"
                    id="gender"
                    data-error="Sorry,please select gender"
                    required
                  >
                    <option
                      value=""
                      disabled
                      selected
                      style={{ display: 'none' }}
                    >
                      Please Choose Gender
                    </option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                  </FormControl>
                </InputGroup>
                <Glyphicon
                  glyph=""
                  className="form-control-feedback"
                  aria-hidden="true"
                />
                <div className="help-block with-errors" />
              </Col>
            </FormGroup>
            <Col md={6}>
              <Alert bsStyle="info" className="alert-padding">
                <b>Attention:</b>
                You should select gender.
              </Alert>
            </Col>
          </Row>
          <Row>
            <FormGroup className="has-feedback" id="Birth">
              <Col md={6}>
                <InputGroup>
                  <InputGroup.Addon>
                    <Glyphicon glyph="calendar" />
                  </InputGroup.Addon>
                  <DatePicker
                    id="example-datepicker"
                    value={this.state.value}
                    onChange={handleChange}
                    name="Birth"
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
            <Col md={6}>
              <Alert bsStyle="info" className="alert-padding">
                <b>Attention:</b>
                You should select bitrh.
              </Alert>
            </Col>
          </Row>
          <Row>
            <FormGroup className="has-feedback">
              <Col md={6}>
                <InputGroup>
                  <InputGroup.Addon>
                    <Glyphicon glyph="home" />
                  </InputGroup.Addon>
                  <FormControl
                    placeholder="Address"
                    name="Address"
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
            <Col md={6}>
              <Alert bsStyle="info" className="alert-padding">
                <b>Attention:</b>
                Address is required.
              </Alert>
            </Col>
          </Row>
          <Row>
            <FormGroup className="has-feedback">
              <Col md={6}>
                <InputGroup>
                  <InputGroup.Addon>
                    <Glyphicon glyph="phone" />
                  </InputGroup.Addon>
                  <FormControl
                    placeholder="Phone"
                    name="Phone"
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
            <Col md={6}>
              <Alert bsStyle="info" className="alert-padding">
                <b>Attention:</b>
                Phone should to be composed of 11 digit number.
              </Alert>
            </Col>
          </Row>
        </Col>
        <Col mdOffset={1} md={4} xs={12}>
          <Button bsStyle="success" block type="submit">
            Create
          </Button>
          <div>
            <Modal show={this.state.showModal} onHide={close}>
              <Modal.Header closeButton>
                <Modal.Title className="modal-title text-warning">
                  Attention
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Please confirm whether you really want to create this employee.
              </Modal.Body>
              <Modal.Footer>
                <Button
                  bsStyle="success"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({ showModal: false });
                    this.props.createEmployee($('#validateForm').serialize());
                    $('#validateForm')[0].reset();
                    $('#gender').val('');
                    toastr.success('Employee Successfully Created!', 'Success');
                  }}
                >
                  Create
                </Button>
                <Button onClick={close}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </Col>
      </Form>
    );
  }
}

CreateForm.propTypes = {
  createEmployee: PropTypes.func.isRequired
};

export default CreateForm;
