import React from 'react';
import { connect } from 'react-redux';
import { fetchTweets } from '../../actions/index';
import { Link, browserHistory } from 'react-router';


@connect((store) => {
  return {
    tweets: store.tweets.tweets,
  };
})
class ReduxThunk extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchTweets());
  }

  render() {
    const { tweets } = this.props;

    // if (!tweets.length) {
    //   return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
    // }

    const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>)

    return <div>
      <ul>{mappedTweets}</ul>
    </div>
  }
}





export default ReduxThunk;

ReduxThunk.propTypes = {
  dispatch: React.PropTypes.node,
  fetchTweets: React.PropTypes.func,
  tweets: React.PropTypes.array,
};
