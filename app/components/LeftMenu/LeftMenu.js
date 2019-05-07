import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Sider } = Layout;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//左侧导航栏，根据openKey和selectKey来控制。
export default class LeftMenu extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Sider width={200} style={{ background: '#fff', maxHeight: 600 }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[this.props.selectKey]}
          defaultOpenKeys={[this.props.openKey]}
          style={{ borderRight: 0 }}
        >
          <SubMenu
            key="List"
            title={
              <span>
                <Icon type="user" />
                List
              </span>
            }
          >
            <Menu.Item key="All">
              <Link to="/">All Employees</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="Version"
            title={
              <span>
                <Icon type="laptop" />
                Version
              </span>
            }
          >
            <Menu.Item key="Charts">
              <Link to="/charts">Data Charts</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="Action"
            title={
              <span>
                <Icon type="laptop" />
                Action
              </span>
            }
          >
            <Menu.Item key="New">
              <Link to="/new">Add Employee</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
