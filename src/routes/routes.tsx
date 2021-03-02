import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import { CustomRoute } from '../components/CustomRoute';

import { AUTHENTICATION_PATH, SignInRoute, SignUpRoute } from './auth.routes';
import { USER_PATH, UserRoutes } from './user.routes';

const Routes = () => {
  const ReturnLogin = () => <Redirect to={USER_PATH.Dashboard} />;

  const routes = (
    <BrowserRouter>
      <Switch>
        <CustomRoute
          exact
          path={AUTHENTICATION_PATH.SignIn}
          component={SignInRoute}
          isPrivate={false}
        />
        <CustomRoute
          exact
          path={AUTHENTICATION_PATH.SignUp}
          component={SignUpRoute}
          isPrivate={false}
        />

        <CustomRoute
          exact
          path={USER_PATH.Dashboard}
          component={UserRoutes}
          isPrivate
          headerActive
        />

        <CustomRoute path="*" isPrivate={false} component={ReturnLogin} />
      </Switch>
    </BrowserRouter>
  );

  return <>{routes}</>;
};

export default Routes;
