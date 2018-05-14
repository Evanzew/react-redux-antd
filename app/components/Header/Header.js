import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
import './Header.css';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
const { Header } = Layout;
// import { LinkContainer } from 'react-router-bootstrap';
export default class HeaderComponent extends Component {
  constructor() {
    super();
    this.state = {
      current: 'List'
    };
  }

  render() {
    const handleClick = e => {
      console.log('click ', e);
      this.setState({
        current: e.key
      });
    };
    return (
      <Header>
        <div className="logo" />
        <Menu
          onClick={handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="List">
            <Link to="/">List</Link>
          </Menu.Item>
          <Menu.Item key="New">
            <Link to="/new">New</Link>
          </Menu.Item>
          {this.props.userName == '' ? (
            <Menu.Item key="login">
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
            >
              <Menu.Item key="logout" onClick={this.props.logoutClick}>
                LougOut
              </Menu.Item>
            </SubMenu>
          )}
        </Menu>
      </Header>
    );
  }
}

HeaderComponent.propTypes = {
  userName: PropTypes.string.isRequired,
  logoutClick: PropTypes.func.isRequired
};
