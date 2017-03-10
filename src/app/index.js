import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import routes from './routes';
import reducers from './reducers';
import './components/bundle.scss';

const createStoreWithMiddleware = applyMiddleware(promise(), thunk, logger())(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('react-root'));
