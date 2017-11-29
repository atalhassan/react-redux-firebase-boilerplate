import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom'
import DashboardPage from '../components/DashboardPage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'
import LoginPage from '../components/LoginPage'
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PrivateRoute path='/dashboard' component={DashboardPage} exact/>
        <PublicRoute path='/' component={LoginPage} exact/>
        <PublicRoute path='/help' component={HelpPage}/>
        <PublicRoute component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
