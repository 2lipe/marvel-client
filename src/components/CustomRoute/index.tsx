import React, { ComponentType } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuthenticationContext } from '../../context/Auth/reducers/authContext';
import { AUTHENTICATION_PATH } from '../../routes/auth.routes';
import { USER_PATH } from '../../routes/user.routes';
import { Layout } from '../Layout';

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

  const authenticated = state.user.token;
  const openRoute = !isPrivate;

  const privateRoute = () => {
    if (isPrivate) {
      if (authenticated) {
        return (
          <Layout headerActive={headerActive}>
            <Component />
          </Layout>
        );
      }

      return <Redirect to={AUTHENTICATION_PATH.SignIn} />;
    }

    if (openRoute && authenticated) {
      return <Redirect to={USER_PATH.Dashboard} />;
    }

    return (
      <Layout headerActive={headerActive}>
        <Component />
      </Layout>
    );
  };

  return <Route {...rest} render={privateRoute} />;
};
