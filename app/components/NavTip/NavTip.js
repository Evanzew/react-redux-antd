import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NavTip extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="col-xs-12 ">
        <ol className="breadcrumb col-xs-12">
          <li className="active">
            <a href="/">EMS</a>
          </li>
          <li className="active">
            <span>
              {this.props.title}
            </span>
          </li>
        </ol>
      </div>
    );
  }
}

NavTip.propTypes = {
  title: PropTypes.string.isRequired
};
