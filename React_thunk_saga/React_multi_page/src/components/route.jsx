import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/app';
import Home from '../components/views/home';
import Search from '../components/views/search';
import Detail from '../components/views/detail';
export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='Search' component={Search}/>
    <Route path='Detail' component={Detail}/>
    <Route path='*' component={Home} />
  </Route>
);
