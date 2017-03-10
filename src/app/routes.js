import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/home/Home';
import About from './components/about/About';
import Reviews from './components/reviews/reviews';
import ReviewsPreview from './components/reviews/reviewsPreview';
import Redux from './components/redux/redux';

export default (
  <Route path="/" component={App}>
    <IndexRoute title={"this is the title pass in from index.js via route"} component={Home} />;
    <Route path="/about" component={About} />
    <Route path="/reviews" component={Reviews} />
    <Route path="/reviews/:id" component={ReviewsPreview} />
    <Route path="/redux" component={Redux} />
  </Route>
);
