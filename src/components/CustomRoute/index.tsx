/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import React, { ComponentType } from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';
import { useAuthenticationContext } from '../../context/Auth/authContext';

import { AUTHENTICATION_PATH } from '../../routes/auth.routes';
import { USER_PATH } from '../../routes/user.routes';

interface CustomRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

export const CustomRoute = ({
  isPrivate = false,
  component: Component,
  ...rest
}: CustomRouteProps) => {
  const { state } = useAuthenticationContext();

  const isSigned = !!state;

  const checkAuthAndRedirect = (location: unknown) =>
    isPrivate === isSigned ? (
      <Component />
    ) : (
      <Redirect
        to={{
          pathname: isPrivate ? AUTHENTICATION_PATH.SignIn : USER_PATH.Dashboard,
          state: { from: location },
        }}
      />
    );

  return <Route {...rest} render={({ location }) => checkAuthAndRedirect(location)} />;
};
