import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './Header.css';
import { LinkContainer } from 'react-router-bootstrap';
export default class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Navbar className="container-fill">
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to="/">
              <NavItem>
                <span className="logo" />
              </NavItem>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/" className="left-line">
              <NavItem eventKey={1}>
                <b>List</b>
              </NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            {this.props.userName == '' ? (
              <LinkContainer to="/login">
                <NavItem eventKey={3}>
                  <b>Log In</b>
                </NavItem>
              </LinkContainer>
            ) : (
              <NavDropdown
                eventKey={3}
                title={this.props.userName}
                id="basic-nav-dropdown"
                className="left-line"
              >
                <MenuItem eventKey={3.1} onClick={this.props.logoutClick}>
                  <b>Logout</b>
                </MenuItem>
              </NavDropdown>
            )}
          </Nav>
          <Nav pullRight>
            <LinkContainer to="/new" className="left-line">
              <NavItem eventKey={2}>
                <b>New</b>
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Header.propTypes = {
  userName: PropTypes.string.isRequired,
  logoutClick: PropTypes.func.isRequired
};
