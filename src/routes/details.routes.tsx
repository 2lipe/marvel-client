import React, { Suspense } from 'react';

import { LinearProgress } from '@material-ui/core';

import { Route, Switch } from 'react-router-dom';
import { CharacterComics } from '../pages/CharacterComics';
import { ComicCharacters } from '../pages/ComicCharacters';

export const DETAIL_ROUTES = {
  ComicCharacter: '/comic/:comicId/characters',
  CharacterComic: '/character/:characterId/comics',
};

export const DetailRoutes = () => {
  const routes = (
    <Switch>
      <Route exact path={DETAIL_ROUTES.ComicCharacter} component={ComicCharacters} />
      <Route exact path={DETAIL_ROUTES.CharacterComic} component={CharacterComics} />
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
