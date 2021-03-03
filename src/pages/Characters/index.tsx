import React, { useCallback, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';

import { CardProps } from '../../components/Card';
import { InputSearch } from '../../components/Search';
import Showcase from '../../components/Showcase';
import { RequestAddCharacterFavorite } from '../../models/dtos/character/AddFavoriteCharacter';
import { CardModel, InfoCard, typeCard } from '../../models/dtos/marvel/Card';
import { useCharactersService } from '../../services/characters.service';
import { useUserService } from '../../services/user.service';
import { CHARACTER_MESSAGES } from '../../shared/helpers/message-helper';
import highlightItem from './highlight';

import * as S from './styles';
import { USER_PATH } from '../../routes/user.routes';
import { Heading } from '../../components/Heading';

export const Characters = () => {
  const [resultMarvelApi, setResultMavelApi] = useState<CardProps[]>([]);

  const { enqueueSnackbar } = useSnackbar();
  const { addCharacterFavorite, removeCharacterFavorite } = useUserService();
  const { getCharacter } = useCharactersService();

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
      await getCardProps(value);
    } catch (error) {
      enqueueSnackbar(CHARACTER_MESSAGES.searchFail, { variant: 'error' });
    }
  };

  const getCardProps = async (value: string) => {
    const response = await getCharacter(value);
    const responseError = !response.success;

    if (responseError) {
      enqueueSnackbar(response.message, { variant: 'error' });
    }

    const arrayCharacterTrated: CardProps[] = [];

    response.data.results.forEach((item) => {
      let characterTrated: CardProps = {} as CardProps;

      const cardTrated = new CardModel('Character', item);

      characterTrated = cardTrated;
      characterTrated.actionAddFavorite = actionAddCharacterFavorite;
      characterTrated.actionRemoveFavorite = actionRemoveCharacterFavorite;
      characterTrated.actionNavigate = navigateToRoute;

      arrayCharacterTrated.push(characterTrated);
    });

    setResultMavelApi(arrayCharacterTrated);
  };

  const actionAddCharacterFavorite = async (data: InfoCard) => {
    try {
      const comicTrated = new RequestAddCharacterFavorite(data);

      const response = await addCharacterFavorite(comicTrated);

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

      <S.InpuContainer>
        <InputSearch
          searchAction={actionSearch}
          placeholder="um personagem"
          type="char"
        />
      </S.InpuContainer>

      <Showcase
        title="Marvel Personagens"
        highlight={highlightItem}
        items={resultMarvelApi}
      />
    </S.Wrapper>
  );
};
