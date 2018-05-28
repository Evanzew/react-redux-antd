import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import SearchBarForm from '../Form/SearchBarForm/SearchBarForm';
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
