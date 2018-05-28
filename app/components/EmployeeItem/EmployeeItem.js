import React, { Component } from 'react';
import './EmployeeItem.css';
import PropTypes from 'prop-types';
import DeleteButton from '../../containers/DeleteButton/DeleteButton';
import UpdateButton from '../../containers/UpdateButton/UpdateButton';
import { Button, Col, Table } from 'antd';
const ButtonGroup = Button.Group;

class EmployeeItem extends Component {
  constructor() {
    super();
    this.state = {
      filteredInfo: null,
      sortedInfo: null
    };
  }
  render() {
    const handleChange = (pagination, filters, sorter) => {
      this.setState({
        filteredInfo: filters,
        sortedInfo: sorter
      });
      if (sorter.columnKey === 'First_Name') {
        if (sorter.order == 'ascend') {
          this.props.sortByFN(true);
        } else {
          this.props.sortByFN(false);
        }
      }
      if (sorter.columnKey === 'Last_Name') {
        if (sorter.order == 'ascend') {
          this.props.sortByLN(true);
        } else {
          this.props.sortByLN(false);
        }
      }
    };
    let pagination = {
      pageSize: 5,
      total: this.props.pages * 5,
      hideOnSinglePage: true,
      current: this.props.index,
      onChange: page => {
        this.props.changeIndex(page);
      }
    };
    const columns = [
      {
        title: 'First Name',
        dataIndex: 'First_Name',
        key: 'First_Name',
        sorter: (a, b) => {
          a.First_Name - b.First_Name;
        }
      },
      {
        title: 'Last Name',
        dataIndex: 'Last_Name',
        key: 'Last_Name',
        sorter: (a, b) => {
          a.Last_Name - b.Last_Name;
        }
      },
      {
        title: 'Gender',
        dataIndex: 'Gender',
        key: 'Gender'
      },
      {
        title: 'Birth',
        dataIndex: 'Birth',
        key: 'Birth'
      },
      {
        title: 'Address',
        dataIndex: 'Address',
        key: 'Address'
      },
      {
        title: 'Phone',
        dataIndex: 'Phone',
        key: 'Phone'
      },
      {
        title: 'Operation',
        key: 'Operation',
        dataIndex: 'Operation',
        render: (text, record) => (
          <ButtonGroup>
            <DeleteButton id={record._id} />
            <UpdateButton employee={record} />
          </ButtonGroup>
        )
      }
    ];
    const data = [];
    this.props.employees.forEach((employee, index) => {
      data.push({
        key: index,
        ...employee
      });
    });
    return (
      <Col xs={24}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={pagination}
          onChange={handleChange}
        />
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
