import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchEmpByOption } from '../../actions/employeeAction';
import SearchBarComponent from '../../components/SearchBar/SearchBar';

class SearchBar extends Component {
  constructor() {
    super();
  }
  render() {
    return <SearchBarComponent searchByOption={this.props.searchByOption} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchByOption: (option, content) => {
      dispatch(searchEmpByOption(option, content));
    }
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);
