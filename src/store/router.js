import React from 'react';
import {Router, browserHistory} from 'react-router';
import Dashboard from '../components/Dashboard';

const routes = {
  childRoutes: [
    {path: '/', component: Dashboard}
  ]
};

export default () => (
  <Router history={browserHistory} routes={routes} />
);
