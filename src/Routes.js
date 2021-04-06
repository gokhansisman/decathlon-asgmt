import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import MainPage from './pages/mainPage'
import history from './history';

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={MainPage}/>
      </Switch>
    </Router>
  )
}

export default Routes;
