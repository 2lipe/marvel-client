/* eslint-disable react/react-in-jsx-scope */
import { Suspense } from 'react';
import { LinearProgress } from '@material-ui/core';

import { Route, Switch } from 'react-router-dom';

import { Characters } from '../pages/Characters';

export const CHARACTERS_PATH = {
  Main: '/characters',
};

export const CharacterRoutes = () => {
  const routes = (
    <Switch>
      <Route exact path={CHARACTERS_PATH.Main} component={Characters} />
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
