/* eslint-disable react/react-in-jsx-scope */
import { Suspense } from 'react';
import { LinearProgress } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

import { Favorites } from '../pages/Favorites';

export const FAVORITES_PATH = {
  Main: '/favorites',
};

export const FavoritesRoutes = () => {
  const routes = (
    <Switch>
      <Route exact path={FAVORITES_PATH.Main} component={Favorites} />
    </Switch>
  );

  return (
    <Suspense
      fallback={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <>
          <LinearProgress color="primary" />
          <LinearProgress color="secondary" />
        </>
      }>
      {routes}
    </Suspense>
  );
};
