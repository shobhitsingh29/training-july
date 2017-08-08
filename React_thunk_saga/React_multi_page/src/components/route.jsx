import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/app';
import Home from '../components/views/home';
import Search from '../components/views/search';
import Details from '../components/views/detail';
export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='contact' component={Contact} />
    <Route path='*' component={Home} />
  </Route>
);
