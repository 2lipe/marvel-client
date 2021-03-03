import React, { useCallback, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';

import Showcase from '../../components/Showcase';
import { RequestAddCharacterFavorite } from '../../models/dtos/character/AddFavoriteCharacter';
import { InfoCard } from '../../models/dtos/marvel/Card';
import { CardProps } from '../../components/Card';
import { useUserService } from '../../services/user.service';

import * as S from './styles';
import { USER_PATH } from '../../routes/user.routes';
import { CardComicFavorite } from '../../models/dtos/comic/FavoriteComic';
import { CHARACTER_MESSAGES, COMIC_MESSAGES } from '../../shared/helpers/message-helper';
import { RequestAddComicFavorite } from '../../models/dtos/comic/AddFavoriteComic';
import { CardCharacterFavorite } from '../../models/dtos/character/FavoriteCharacter';
import { Heading } from '../../components/Heading';

export const Favorites = () => {
  const [comicsFavorites, setComicsFavorites] = useState<CardProps[]>([]);
  const [charactersFavorites, setCharactersFavorites] = useState<CardProps[]>([]);

  const {
    getComicsFavorites,
    addComicFavorite,
    removeComicFavorite,
    addCharacterFavorite,
    getCharactersFavorites,
    removeCharacterFavorite,
  } = useUserService();

  useEffect(() => {
    actionGetComicsFavorites();
    actionGetCharactersFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const actionGetComicsFavorites = async () => {
    try {
      const response = await getComicsFavorites();
      const errorResponse = !response.success;
      if (errorResponse) {
        enqueueSnackbar(response.message, { variant: 'error' });
      }

      const arrayComicTrated: CardProps[] = [];

      response.data.forEach((item) => {
        let comicTrated: CardProps = {} as CardProps;

        const cardTrated = new CardComicFavorite('Comic', item);

        comicTrated = cardTrated;
        comicTrated.actionAddFavorite = actionAddComicFavorite;
        comicTrated.actionRemoveFavorite = actionRemoveComicFavorite;

        arrayComicTrated.push(comicTrated);
      });

      setComicsFavorites(arrayComicTrated);
    } catch (error) {
      enqueueSnackbar(COMIC_MESSAGES.searchFail, { variant: 'error' });
    }
  };

  const actionAddComicFavorite = async (data: InfoCard) => {
    try {
      const comicTrated = new RequestAddComicFavorite(data);
      const response = await addComicFavorite(comicTrated);

      if (response.success) {
        enqueueSnackbar(COMIC_MESSAGES.addFavorite, { variant: 'success' });
      } else {
        enqueueSnackbar(COMIC_MESSAGES.failFavorite, { variant: 'error' });
      }

      return response.success;
    } catch (error) {
      enqueueSnackbar(COMIC_MESSAGES.failFavorite, { variant: 'error' });

      return false;
    }
  };

  const actionRemoveComicFavorite = async (id: string) => {
    try {
      const response = await removeComicFavorite(id);
      if (response.success) {
        await actionGetComicsFavorites();
        enqueueSnackbar(COMIC_MESSAGES.removeSucess, { variant: 'success' });
      } else {
        enqueueSnackbar(COMIC_MESSAGES.removeFail, { variant: 'error' });
      }
      const responseReturn = !response.success;
      return responseReturn;
    } catch (error) {
      enqueueSnackbar(COMIC_MESSAGES.searchFail, { variant: 'error' });
      return true;
    }
  };

  const actionGetCharactersFavorites = async () => {
    try {
      const response = await getCharactersFavorites();
      const errorResponse = !response.success;

      if (errorResponse) {
        enqueueSnackbar(response.message, { variant: 'error' });
      }

      const arrayCharacterTrated: CardProps[] = [];

      response.data.forEach((item) => {
        let characterTrated: CardProps = {} as CardProps;

        const cardTrated = new CardCharacterFavorite('Character', item);
        characterTrated = cardTrated;
        characterTrated.actionAddFavorite = actionAddCharacterFavorite;
        characterTrated.actionRemoveFavorite = actionRemoveCharacterFavorite;

        arrayCharacterTrated.push(characterTrated);
      });

      setCharactersFavorites(arrayCharacterTrated);
    } catch (error) {
      enqueueSnackbar(CHARACTER_MESSAGES.searchFail, { variant: 'error' });
    }
  };

  const actionAddCharacterFavorite = async (data: InfoCard) => {
    try {
      const characterTrated = new RequestAddCharacterFavorite(data);

      const response = await addCharacterFavorite(characterTrated);

      if (response.success) {
        enqueueSnackbar(CHARACTER_MESSAGES.addFavorite, { variant: 'success' });
      } else {
        enqueueSnackbar(CHARACTER_MESSAGES.failFavorite, { variant: 'error' });
      }

      return response.success;
    } catch (error) {
      enqueueSnackbar(CHARACTER_MESSAGES.failFavorite, { variant: 'error' });

      return false;
    }
  };

  const actionRemoveCharacterFavorite = async (id: string) => {
    try {
      const response = await removeCharacterFavorite(id);

      if (response.success) {
        await actionGetCharactersFavorites();

        enqueueSnackbar(CHARACTER_MESSAGES.removeSucess, { variant: 'success' });
      } else {
        enqueueSnackbar(CHARACTER_MESSAGES.removeFail, {
          variant: 'error',
        });
      }

      const responseReturn = !response.success;

      return responseReturn;
    } catch (error) {
      enqueueSnackbar(CHARACTER_MESSAGES.removeFail, { variant: 'error' });
      return true;
    }
  };

  const backToHomePage = useCallback(() => {
    history.push(USER_PATH.Dashboard);
  }, [history]);

  return (
    <S.Wrapper>
      <Heading navigateToDashboard={backToHomePage}>Voltar</Heading>

      <Showcase title="Comics Favoritas" items={comicsFavorites} />

      <Showcase title="Personagens Favoritos" items={charactersFavorites} />
    </S.Wrapper>
  );
};
