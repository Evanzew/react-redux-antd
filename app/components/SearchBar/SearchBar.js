import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';
import {
  Col,
  Panel,
  Button,
  Form,
  FormGroup,
  FormControl
} from 'react-bootstrap';
import $ from 'jquery';
class SearchBar extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Col xs={12}>
        <Panel header="Search">
          <Form inline>
            <FormGroup>
              <label htmlFor="searchContent">Content</label>
              <FormControl
                type="text"
                id="searchContent"
                placeholder="Please enter the content"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="searchInput">Options</label>
              <FormControl
                componentClass="select"
                id="searchInput"
                placeholder="Please enter the content"
              >
                <option value="First_Name">FirstName</option>
                <option value="Last_Name">LastName</option>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <Button
                type="submit"
                onClick={e => {
                  e.preventDefault();
                  this.props.searchByOption(
                    $('#searchInput').val(),
                    $('#searchContent').val()
                  );
                  console.log();
                }}
              >
                Search
              </Button>
            </FormGroup>
          </Form>
        </Panel>
      </Col>
    );
  }
}

SearchBar.propTypes = {
  searchByOption: PropTypes.func.isRequired
};

export default SearchBar;
