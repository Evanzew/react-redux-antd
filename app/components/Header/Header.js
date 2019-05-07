import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
import './Header.scss';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
const { Header } = Layout;

//每个页面的头部，根据current来显示是否为当前页面。
export default class HeaderComponent extends Component {
  constructor() {
    super();
    this.state = {
      current: 'List'
    };
  }

  render() {
    const handleClick = e => {
      this.setState({
        current: e.key
      });
    };
    return (
      <Header>
        <div className="logo" />
        <Menu
          onClick={handleClick}
          selectedKeys={[this.props.current]}
          mode="horizontal"
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="List">
            <Link to="/">List</Link>
          </Menu.Item>
          <Menu.Item key="Charts">
            <Link to="/charts">Charts</Link>
          </Menu.Item>
          {this.props.userName == '' ? (
            <Menu.Item key="Login" className="pull-right">
              <Link to="/login">Log In</Link>
            </Menu.Item>
          ) : (
            <SubMenu
              title={
                <span>
                  <Icon type="user" />
                  {this.props.userName}
                </span>
              }
              className="pull-right"
            >
              <Menu.Item
                key="Logout"
                className="text-center"
                onClick={this.props.logoutClick}
              >
                Log Out
              </Menu.Item>
            </SubMenu>
          )}
          <Menu.Item key="New" className="pull-right">
            <Link to="/new">New</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

HeaderComponent.propTypes = {
  userName: PropTypes.string.isRequired,
  logoutClick: PropTypes.func.isRequired
};
