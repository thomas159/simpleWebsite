import React from 'react';
import { connect } from 'react-redux';
import fetchUsers from '../../actions/index';

class Redux extends React.Component {

  componentWillMount() {
    this.props.fetchUsers();
    console.log(this.props.fetchUsers);
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default Redux;

Redux.propTypes = {
  dispatch: React.PropTypes.node,
  fetchUsers: React.PropTypes.node,
};
