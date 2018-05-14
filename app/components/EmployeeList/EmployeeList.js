import React, { Component } from 'react';
import EmployeeItem from '../EmployeeItem/EmployeeItem';
import SearchBar from '../../containers/SearchBar/SearchBar';
import NavTip from '../NavTip/NavTip';
import LeftMenu from '../../components/LeftMenu/LeftMenu.js';
// import { receiveEmployee } from '../../actions/employeeAction';
import Header from '../../containers/Header/Header';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

export default class EmployeeList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAll();
  }
  render() {
    return (
      <Layout className="layout">
        <Header />
        <Layout style={{ padding: '0 24px 24px', maxHeight: 600 }}>
          <LeftMenu />
          <Layout style={{ padding: '0 24px 24px' }} className="container">
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
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

EmployeeList.propTypes = {
  employees: PropTypes.array.isRequired,
  sortByFN: PropTypes.func.isRequired,
  sortByLN: PropTypes.func.isRequired,
  changeIndex: PropTypes.func.isRequired
};
