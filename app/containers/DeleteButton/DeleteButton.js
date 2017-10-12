import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteEmployee } from '../../actions/employeeAction';
import DeleteButtonComponent from '../../components/DeleteButton/DeleteButton';

class DeleteButton extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <DeleteButtonComponent
        id={this.props.id}
        deleteClick={this.props.deleteClick}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteClick: id => {
      dispatch(deleteEmployee(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(DeleteButton);
