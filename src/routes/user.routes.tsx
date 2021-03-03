import React from 'react';
import { Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { UpdateUser } from '../pages/UpdateUser';

const USER_PATH = {
  Dashboard: '/dashboard',
  Profile: '/update-profile',
} as const;

const UserRoutes = () => <Route exact path={USER_PATH.Dashboard} component={Dashboard} />;

const UpdateUserRoutes = () => (
  <Route exact path={USER_PATH.Profile} component={UpdateUser} />
);

export { USER_PATH, UserRoutes, UpdateUserRoutes };
