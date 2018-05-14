import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Sider } = Layout;
import React, { Component } from 'react';
export default class LeftMenu extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['List']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="List"
            title={
              <span>
                <Icon type="user" />List
              </span>
            }
          >
            <Menu.Item key="1">All Employees</Menu.Item>
          </SubMenu>
          <SubMenu
            key="Action"
            title={
              <span>
                <Icon type="laptop" />Action
              </span>
            }
          >
            <Menu.Item key="2">Add Employee</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
