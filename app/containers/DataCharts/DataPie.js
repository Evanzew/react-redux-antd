import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataChartComponent from '../../components/DataChart/DataPie';

class EmployeeList extends Component {
  constructor() {
    super();
  }
  render() {
    return <DataChartComponent employees={this.props.employees} />;
  }
}

const mapStateToProps = state => {
  const employees = state.employees.employee;

  return {
    employees
  };
};

export default connect(mapStateToProps, null)(EmployeeList);
