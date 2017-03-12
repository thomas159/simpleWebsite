import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/index';
import { Link, browserHistory } from 'react-router';



// @connect((store) => {
//   return {
//     users: store.users.all,
//   };
// })
class Redux extends React.Component {

  componentWillMount() {
    this.props.fetchUsers();
    console.log(this.props.fetchUsers);
  }

  renderUsers() {
    return this.props.users.map((user) =>
      <ul>
        <li>{user.id}</li>
        <li>{user.login}</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderUsers()}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { users: state.users.all };
}


export default connect(mapStateToProps, { fetchUsers })(Redux);

Redux.propTypes = {
  dispatch: React.PropTypes.node,
  fetchUsers: React.PropTypes.func,
  users: React.PropTypes.array,
};
