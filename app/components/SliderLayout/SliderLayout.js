import React, { Component } from 'react';
import NavTip from '../NavTip/NavTip';
import LeftMenu from '../../components/LeftMenu/LeftMenu.js';
import Header from '../../containers/Header/Header';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
const { Content } = Layout;

//提取相同的layout成一个单独的组件，通过props.children来与其他组件合用。
export default class SlderLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Header current={this.props.current} />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content style={{ padding: '0 24px 24px' }} className="container">
            <NavTip title={this.props.title} />
            <Layout style={{ background: '#fff' }}>
              <LeftMenu
                openKey={this.props.openKey}
                selectKey={this.props.selectKey}
              />
              <Content style={this.props.contentStyle}>
                {this.props.children}
              </Content>
            </Layout>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

SlderLayout.propTypes = {
  current: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  openKey: PropTypes.string.isRequired,
  selectKey: PropTypes.string.isRequired
};

SlderLayout.defaultProps = {
  contentStyle: {}
};
