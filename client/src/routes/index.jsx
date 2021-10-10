import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ROUTES } from './constants';
import TasksPage from '../screens/TasksPage';
import AuthPage from '../screens/AuthPage';
import { useSelector } from 'react-redux';

const Routes = () => {
  console.log(ROUTES.HOME);
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.AUTH} exact component={AuthPage} />
        <Route path={ROUTES.HOME} exact component={TasksPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
