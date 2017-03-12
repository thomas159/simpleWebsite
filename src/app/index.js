import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import routes from './routes';
import reducers from './reducers';
import './components/bundle.scss';

const createStoreWithMiddleware = applyMiddleware(
	promise, logger(), thunk
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    {routes}
    </Router>
  </Provider>
  , document.getElementById('react-root'));
