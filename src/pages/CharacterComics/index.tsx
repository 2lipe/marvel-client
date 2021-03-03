import React, { useCallback, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { RouteComponentProps, useHistory } from 'react-router-dom';

import { CardProps } from '../../components/Card';
import { RequestAddComicFavorite } from '../../models/dtos/comic/AddFavoriteComic';
import { CardModel, InfoCard } from '../../models/dtos/marvel/Card';
import { useCharactersService } from '../../services/characters.service';
import { useUserService } from '../../services/user.service';
import { COMIC_MESSAGES } from '../../shared/helpers/message-helper';
import { USER_PATH } from '../../routes/user.routes';
import { Heading } from '../../components/Heading';
import Showcase from '../../components/Showcase';

import highlightItem from './highlight';

import * as S from './styles';

export const CharacterComics = ({ location }: RouteComponentProps) => {
  const [comics, setComics] = useState<CardProps[]>([]);

  const { getComicsOfCharacter } = useCharactersService();
  const { addComicFavorite, removeComicFavorite } = useUserService();
  const { enqueueSnackbar } = useSnackbar();

  const history = useHistory();
  const [, , characterId] = location.pathname.split('/');

  useEffect(() => {
    actionGetComicsOfCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const actionGetComicsOfCharacter = async () => {
    try {
      const response = await getComicsOfCharacter(characterId);
      const errorResponse = !response.success;

      if (errorResponse) {
        enqueueSnackbar(response.message, { variant: 'error' });
      }

      const arrayComicTrated: CardProps[] = [];

      response.data.results.forEach((item) => {
        let comicTrated: CardProps = {} as CardProps;

        const cardTrated = new CardModel('Comic', item);

        comicTrated = cardTrated;
        comicTrated.actionAddFavorite = actionAddComicFavorite;
        comicTrated.actionRemoveFavorite = actionRemoveComicFavorite;

        arrayComicTrated.push(comicTrated);
      });

      setComics(arrayComicTrated);
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
        enqueueSnackbar(COMIC_MESSAGES.removeSucess, { variant: 'success' });
      } else {
        enqueueSnackbar(COMIC_MESSAGES.removeFail, { variant: 'error' });
      }

      const responseReturn = !response.success;
      return responseReturn;
    } catch (error) {
      enqueueSnackbar(COMIC_MESSAGES.removeFail, { variant: 'error' });
      return true;
    }
  };

  const backToHomePage = useCallback(() => {
    history.push(USER_PATH.Dashboard);
  }, [history]);

  return (
    <S.Wrapper>
      <Heading navigateToDashboard={backToHomePage}>Voltar</Heading>

      <Showcase
        title="Comics relacionadas ao personagem."
        highlight={highlightItem}
        items={comics}
      />
    </S.Wrapper>
  );
};
