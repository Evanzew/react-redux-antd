import React, { Component } from 'react';
import './EmployeeItem.css';
import PropTypes from 'prop-types';
import DeleteButton from '../../containers/DeleteButton/DeleteButton';
import UpdateButton from '../../containers/UpdateButton/UpdateButton';
import { Col, Table, Pagination } from 'react-bootstrap';
class EmployeeItem extends Component {
  constructor() {
    super();
    this.state = { activePage: 1 };
  }
  render() {
    const handleSelect = eventKey => {
      this.setState({
        activePage: eventKey
      });
    };
    return (
      <Col xs={12}>
        <Table responsive striped condensed hover>
          <thead>
            <tr>
              <th>
                <a
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    this.props.sortByFN();
                  }}
                >
                  Frist Name
                </a>
              </th>
              <th>
                <a
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    this.props.sortByLN();
                  }}
                >
                  Last Name
                </a>
              </th>
              <th>Gender</th>
              <th>Birth</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {this.props.employees.map((employee, i) => (
              <tr key={i}>
                <td>{employee.First_Name}</td>
                <td>{employee.Last_Name}</td>
                <td>{employee.Gender}</td>
                <td>{employee.Birth}</td>
                <td>{employee.Address}</td>
                <td>{employee.Phone}</td>
                <td>
                  <div className="btn-group">
                    <DeleteButton id={employee._id} />
                    {/*<div className="display-line">
                      <input
                        type="button"
                        id="update1"
                        value="Update"
                        className="btn btn-success"
                      />
                    </div>*/}
                    <UpdateButton employee={employee} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="pull-right">
          <Pagination
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            maxButtons={3}
            bsSize="medium"
            items={this.props.pages}
            activePage={this.props.index}
            onSelect={eventKey => {
              handleSelect(eventKey);
              this.props.changeIndex(eventKey);
            }}
          />
        </div>
      </Col>
    );
  }
}

EmployeeItem.propTypes = {
  employees: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  changeIndex: PropTypes.func.isRequired
};

export default EmployeeItem;
