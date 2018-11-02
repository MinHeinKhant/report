import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/layout/Header';
import Dashboard from '../components/layout/Dashboard';
import Students from '../components/Students/Students';
import NotFound from '../components/NotFound';
import AppNavbar from '../components/layout/AppNavbar';

const AppRouter = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <AppNavbar />
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/users/:id" component={Students} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
