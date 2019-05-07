import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import SearchBarForm from '../Form/SearchBarForm/SearchBarForm';
//员工信息list上的搜索框。
class SearchBar extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Row>
        <Col xs={24}>
          <Card title="Search">
            <SearchBarForm searchByOption={this.props.searchByOption} />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default SearchBar;
