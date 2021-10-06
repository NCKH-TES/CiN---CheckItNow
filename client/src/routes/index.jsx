import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ROUTES } from './constants';

import TasksPage from '../screens/TasksPage';

const Routes = () => {
  console.log(ROUTES.HOME);
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.HOME} exact component={TasksPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
