import React from 'react';
import { Route } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

const AUTHENTICATION_PATH = {
  SignIn: '/',
  SignUp: '/sign-up',
} as const;

const SignInRoute = () => (
  <Route exact path={AUTHENTICATION_PATH.SignIn} component={SignIn} />
);

const SignUpRoute = () => (
  <Route exact path={AUTHENTICATION_PATH.SignUp} component={SignUp} />
);

export { AUTHENTICATION_PATH, SignInRoute, SignUpRoute };
