import React, { Component } from 'react';
import EmployeeItem from '../EmployeeItem/EmployeeItem';
import SearchBar from '../../containers/SearchBar/SearchBar';
import NavTip from '../NavTip/NavTip';
import LeftMenu from '../../components/LeftMenu/LeftMenu.js';
import Header from '../../containers/Header/Header';
import './EmployeeList.scss';
import PropTypes from 'prop-types';
import { Layout, Spin } from 'antd';
const { Content } = Layout;
let loadingTimeOut;
export default class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.props.getAll();
    if (this.props.employees.length == 0) {
      loadingTimeOut = window.setTimeout(() => {
        this.setState({
          loading: false
        });
      }, 8000);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.employees.length == 0) {
      this.setState({ loading: true });
      window.setTimeout(() => {
        this.setState({
          loading: false
        });
      }, 2000);
    }
  }
  componentWillUnmount() {
    window.clearTimeout(loadingTimeOut);
  }
  render() {
    return (
      <Layout>
        <Header current={'List'} />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content style={{ padding: '0 24px 24px' }} className="container">
            <NavTip title={'EmployeeList'} />
            <Layout style={{ background: '#fff' }}>
              <LeftMenu openKey={'List'} selectKey={'All'} />
              <Content>
                <SearchBar />
                {this.props.employees.length > 0 || !this.state.loading ? (
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
              </Content>
            </Layout>
          </Content>
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
