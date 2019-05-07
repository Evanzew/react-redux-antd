import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';
//每个页面header和内容之间的tip，用来提示当前页面。
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
