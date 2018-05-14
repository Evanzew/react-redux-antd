import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';
export default class NavTip extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Breadcrumb style={{ margin: '16px 15px' }}>
        <Breadcrumb.Item>EMS</Breadcrumb.Item>
        <Breadcrumb.Item>{this.props.title}</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

NavTip.propTypes = {
  title: PropTypes.string.isRequired
};
