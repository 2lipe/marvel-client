import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { CustomRoute } from '../components/CustomRoute';

import { AUTHENTICATION_PATH, SignInRoute, SignUpRoute } from './auth.routes';
import { USER_PATH, UserRoutes } from './user.routes';

const Routes = () => {
  const routes = (
    <BrowserRouter>
      <Switch>
        <CustomRoute exact path={AUTHENTICATION_PATH.SignIn} component={SignInRoute} />
        <CustomRoute exact path={AUTHENTICATION_PATH.SignUp} component={SignUpRoute} />

        <CustomRoute exact path={USER_PATH.Dashboard} component={UserRoutes} isPrivate />
      </Switch>
    </BrowserRouter>
  );

  return <>{routes}</>;
};

export default Routes;
