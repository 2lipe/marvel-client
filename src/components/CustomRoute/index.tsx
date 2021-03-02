import React, { ComponentType } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuthenticationContext } from '../../context/Auth/reducers/authContext';
import { AUTHENTICATION_PATH } from '../../routes/auth.routes';
import { USER_PATH } from '../../routes/user.routes';

interface CustomRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType;
  headerActive?: boolean;
}

export const CustomRoute = ({
  isPrivate = true,
  headerActive = false,
  component: Component,
  ...rest
}: CustomRouteProps) => {
  const { state } = useAuthenticationContext();

  console.log(state.user.token);

  const authenticated = state.user.token;
  const openRoute = !isPrivate;

  const privateRoute = () => {
    if (isPrivate) {
      if (authenticated) {
        return (
          <>
            <Component />
          </>
        );
      }

      return <Redirect to={AUTHENTICATION_PATH.SignIn} />;
    }

    if (openRoute && authenticated) {
      return <Redirect to={USER_PATH.Dashboard} />;
    }

    return (
      <>
        <Component />
      </>
    );
  };

  return <Route {...rest} render={privateRoute} />;
};
