import React, { useCallback, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { RouteComponentProps, useHistory } from 'react-router-dom';

import { CardProps } from '../../components/Card';
import { RequestAddCharacterFavorite } from '../../models/dtos/character/AddFavoriteCharacter';
import { CardModel, InfoCard } from '../../models/dtos/marvel/Card';
import { useComicsService } from '../../services/comic.service';
import { useUserService } from '../../services/user.service';
import { CHARACTER_MESSAGES } from '../../shared/helpers/message-helper';
import { Heading } from '../../components/Heading';
import Showcase from '../../components/Showcase';
import { USER_PATH } from '../../routes/user.routes';

import highlightItems from './highlight';

import * as S from './styles';

export const ComicCharacters = ({ location }: RouteComponentProps) => {
  const [characters, setCharacters] = useState<CardProps[]>([]);

  const { getCharactersOfComic } = useComicsService();
  const { addCharacterFavorite, removeCharacterFavorite } = useUserService();
  const { enqueueSnackbar } = useSnackbar();

  const history = useHistory();
  const [, , comicId] = location.pathname.split('/');

  useEffect(() => {
    actionGetCharactersOfComic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const actionGetCharactersOfComic = async () => {
    try {
      const response = await getCharactersOfComic(comicId);
      const errorResponse = !response.success;

      if (errorResponse) {
        enqueueSnackbar(response.message, { variant: 'error' });
      }

      const arrayCharacterTrated: CardProps[] = [];

      response.data.results.forEach((item) => {
        let characterTrated: CardProps = {} as CardProps;

        const cardTrated = new CardModel('Character', item);

        characterTrated = cardTrated;
        characterTrated.actionAddFavorite = actionAddCharacterFavorite;
        characterTrated.actionRemoveFavorite = actionRemoveCharacterFavorite;

        arrayCharacterTrated.push(characterTrated);
      });

      setCharacters(arrayCharacterTrated);
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

      <Showcase
        title="Personagens relacionados a comic"
        highlight={highlightItems}
        items={characters}
      />
    </S.Wrapper>
  );
};
