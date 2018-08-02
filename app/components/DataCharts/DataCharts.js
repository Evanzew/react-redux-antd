import React, { Component } from 'react';
import NavTip from '../NavTip/NavTip';
import Header from '../../containers/Header/Header.js';
import LeftMenu from '../../components/LeftMenu/LeftMenu.js';
import DataPie from '../../containers/DataCharts/DataPie';
import { Layout } from 'antd';
const { Content } = Layout;
export default class AddEmployee extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <Header current={'Charts'} />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content style={{ padding: '0 24px 24px' }}>
            <NavTip title={'Charts'} />
            <Layout>
              <LeftMenu openKey={'Version'} selectKey={'Charts'} />
              <Content style={{ padding: '0 24px', overflow: 'hidden' }}>
                <DataPie />
              </Content>
            </Layout>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
