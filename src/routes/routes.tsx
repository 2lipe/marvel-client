import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { AUTHENTICATION_PATH, SignInRoute, SignUpRoute } from './auth.routes';

const Routes = () => {
  const routes = (
    <BrowserRouter>
      <Switch>
        <Route exact path={AUTHENTICATION_PATH.SignIn} component={SignInRoute} />
        <Route exact path={AUTHENTICATION_PATH.SignUp} component={SignUpRoute} />
      </Switch>
    </BrowserRouter>
  );

  return <>{routes}</>;
};

export default Routes;
