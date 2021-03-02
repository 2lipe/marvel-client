import React from 'react';
import { Route } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';

const USER_PATH = {
  Dashboard: '/dashboard',
} as const;

const UserRoutes = () => {
  const routes = (
    <>
      <Route exact path={USER_PATH.Dashboard} component={Dashboard} />
    </>
  );

  return <>{routes}</>;
};

export { USER_PATH, UserRoutes };
