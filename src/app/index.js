import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/home/Home';
import About from './components/about/About';
import Reviews from './components/reviews/reviews';
import ReviewsPreview from './components/reviews/reviewsPreview'
import Redux from './components/redux/redux'

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducers from './reducers';

import './components/bundle.scss';

const createStoreWithMiddleware = applyMiddleware(promise(), thunk, logger())(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute title={"this is the title pass in from index.js via route"} component={Home} />;
        <Route path="/about"  component={About} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/reviews/:id" component={ReviewsPreview} />
        <Route path="/redux" component={Redux} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('react-root'));
