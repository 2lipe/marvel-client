/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';
import { useSnackbar } from 'notistack';

import { useHistory } from 'react-router';
import { CardProps } from '../../components/Card';
import Showcase from '../../components/Showcase';
import { RequestAddComicFavorite } from '../../models/dtos/comic/AddFavoriteComic';
import { CardModel, InfoCard, typeCard } from '../../models/dtos/marvel/Card';
import { useComicsService } from '../../services/comic.service';
import { useUserService } from '../../services/user.service';

import highlightItems from './highlight';

import * as S from './styles';
import { CHARACTER_MESSAGES, COMIC_MESSAGES } from '../../shared/helpers/message-helper';
import { InputSearch } from '../../components/Search';

export const Comics = () => {
  const [resultMarvelApi, setResultMavelApi] = useState<CardProps[]>([]);

  const { getComics } = useComicsService();
  const { enqueueSnackbar } = useSnackbar();
  const { addComicFavorite, removeComicFavorite } = useUserService();

  const history = useHistory();

  const navigateToRoute = (id: string, type: typeCard) => {
    if (type === 'Character') {
      const urlCharacter = `/character/${id}/comics`;

      history.push(urlCharacter);
    } else {
      const urlComic = `/comic/${id}/characters`;

      history.push(urlComic);
    }
  };

  const actionSearch = async (value: string) => {
    try {
      await getComic(value);
    } catch (error) {
      enqueueSnackbar(CHARACTER_MESSAGES.searchFail, { variant: 'error' });
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
        enqueueSnackbar(COMIC_MESSAGES.removeFail, {
          variant: 'error',
        });
      }

      const responseReturn = !response.success;

      return responseReturn;
    } catch (error) {
      enqueueSnackbar(COMIC_MESSAGES.removeFail, { variant: 'error' });
      return true;
    }
  };

  const getComic = async (value: string) => {
    const response = await getComics(value);
    const responseError = !response.success;

    if (responseError) {
      enqueueSnackbar(response.message, { variant: 'error' });
    }

    const arrayComicTrated: CardProps[] = [];

    response.data.results.forEach((item) => {
      let comicTrated: CardProps = {} as CardProps;

      const cardTrated = new CardModel('Comic', item);

      comicTrated = cardTrated;
      comicTrated.actionAddFavorite = actionAddComicFavorite;
      comicTrated.actionRemoveFavorite = actionRemoveComicFavorite;
      comicTrated.actionNavigate = navigateToRoute;

      arrayComicTrated.push(comicTrated);
    });

    setResultMavelApi(arrayComicTrated);
  };

  return (
    <S.Wrapper>
      <S.InpuContainer>
        <InputSearch searchAction={actionSearch} placeholder="uma comic" type="char" />
      </S.InpuContainer>

      <Showcase
        title="Marvel Comics"
        highlight={highlightItems}
        items={resultMarvelApi}
      />
    </S.Wrapper>
  );
};
