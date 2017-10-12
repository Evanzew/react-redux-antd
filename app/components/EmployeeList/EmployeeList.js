import React, { Component } from 'react';
import EmployeeItem from '../EmployeeItem/EmployeeItem';
import SearchBar from '../../containers/SearchBar/SearchBar';
import NavTip from '../NavTip/NavTip';
// import { receiveEmployee } from '../../actions/employeeAction';
import Header from '../../containers/Header/Header';
import PropTypes from 'prop-types';

export default class EmployeeList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAll();
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <NavTip title={'EmployeeList'} />
          <SearchBar />
          <EmployeeItem
            employees={this.props.employees}
            index={this.props.index}
            pages={this.props.pages}
            changeIndex={this.props.changeIndex}
            sortByFN={this.props.sortByFN}
            sortByLN={this.props.sortByLN}
          />
        </div>
      </div>
    );
  }
}

EmployeeList.propTypes = {
  employees: PropTypes.array.isRequired,
  sortByFN: PropTypes.func.isRequired,
  sortByLN: PropTypes.func.isRequired,
  changeIndex: PropTypes.func.isRequired
};
