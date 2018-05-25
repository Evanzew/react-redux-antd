import React, { Component } from 'react';
import NavTip from '../NavTip/NavTip';
import Header from '../../containers/Header/Header.js';
import CreateForm from '../../containers/CreateForm/CreateForm';
import LeftMenu from '../../components/LeftMenu/LeftMenu.js';
import { Layout } from 'antd';
const { Content } = Layout;
export default class AddEmployee extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <Header current={'New'} />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content style={{ padding: '0 24px 24px' }} className="container">
            <NavTip title={'NewEmployee'} />
            <Layout>
              <LeftMenu openKey={'Action'} selectKey={'New'} />
              <Content style={{ padding: '0 24px' }}>
                <CreateForm />
              </Content>
            </Layout>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
