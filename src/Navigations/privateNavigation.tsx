import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { EditRoute, NotFound } from 'Pages';

export const PrivateNavigation = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={EditRoute} />
        <Route path="" component={NotFound} />
      </Switch>
    </Router>
  );
};
