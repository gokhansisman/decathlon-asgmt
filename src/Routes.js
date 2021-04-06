import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import MainPage from './pages/mainPage'
import UsersPage from './pages/usersPage'
import UserDetailPage from './pages/userDetailPage'
import history from './history';

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/users" component={UsersPage}/>
        <Route exact path="/users/:id" component={UserDetailPage}/>
      </Switch>
    </Router>
  )
}

export default Routes;
