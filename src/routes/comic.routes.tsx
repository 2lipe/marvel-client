/* eslint-disable react/react-in-jsx-scope */
import { Suspense } from 'react';
import { LinearProgress } from '@material-ui/core';

import { Route, Switch } from 'react-router-dom';

import { Comics } from '../pages/Comics';

export const COMICS_PATH = {
  Main: '/comics',
};

export const ComicRoutes = () => {
  const routes = (
    <Switch>
      <Route exact path={COMICS_PATH.Main} component={Comics} />
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
