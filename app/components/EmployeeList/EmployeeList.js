import React, { Component } from 'react';
import 'babel-polyfill';
import EmployeeItem from '../EmployeeItem/EmployeeItem';
import SearchBar from '../../containers/SearchBar/SearchBar';
import './EmployeeList.scss';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

import SliderLayout from '../SliderLayout/SliderLayout';

//员工信息的页面。
export default class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.props.getAll();
    this.loadingState = window.setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.loadingState);
  }

  render() {
    return (
      <SliderLayout
        current={'List'}
        title={'EmployeeList'}
        openKey={'List'}
        selectKey={'All'}
      >
        <SearchBar />
        {!this.state.loading ? (
          <EmployeeItem
            employees={this.props.employees}
            index={this.props.index}
            pages={this.props.pages}
            changeIndex={this.props.changeIndex}
            sortByFN={this.props.sortByFN}
            sortByLN={this.props.sortByLN}
          />
        ) : (
          <div className="loadingContext">
            <Spin spinning={this.state.loading} />
          </div>
        )}
      </SliderLayout>
    );
  }
}

EmployeeList.propTypes = {
  employees: PropTypes.array.isRequired,
  sortByFN: PropTypes.func.isRequired,
  sortByLN: PropTypes.func.isRequired,
  changeIndex: PropTypes.func.isRequired
};
