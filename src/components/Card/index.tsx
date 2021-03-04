/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useCallback, useState } from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import { FiBook, FiUser } from 'react-icons/fi';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import LazyLoad from 'react-lazyload';
import { InfoCard, typeCard } from '../../models/dtos/marvel/Card';
import { Button } from '../Button';

import * as S from './styles';

export type CardProps = {
  id: string;
  title: string;
  type?: typeCard;
  description?: string | null;
  imgUrl: string;
  isFavorite: boolean;
  linkDetail: string;
  actionAddFavorite?: (data: InfoCard) => Promise<boolean>;
  actionRemoveFavorite?: (id: string) => Promise<boolean>;
  actionNavigate?: (id: string, type: typeCard) => void;
};

export const Card = ({
  id,
  imgUrl,
  type,
  title,
  linkDetail,
  isFavorite,
  description,
  actionNavigate,
  actionAddFavorite,
  actionRemoveFavorite,
}: CardProps) => {
  const [favoritCard, setFavoriteCard] = useState<boolean>(isFavorite);

  const handleAddFavoriteAction = useCallback(async () => {
    if (actionAddFavorite) {
      const info: InfoCard = {
        id,
        imgUrl,
        title,
        linkDetail,
      };

      const response = await actionAddFavorite(info);

      setFavoriteCard(response);
    }
  }, [actionAddFavorite, id, imgUrl, linkDetail, title]);

  const handleRemoveFavoriteAction = useCallback(async () => {
    if (actionRemoveFavorite) {
      const response = await actionRemoveFavorite(id);

      setFavoriteCard(response);
    }
  }, [actionRemoveFavorite, id]);

  const actionDetail = useCallback(() => {
    window.location.href = linkDetail;
  }, [linkDetail]);

  return (
    <S.Wrapper>
      <LazyLoad>
        <S.ImageBox>
          <img src={imgUrl} alt={title} />
        </S.ImageBox>
      </LazyLoad>

      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Info>

        <S.FavButton role="button">
          {favoritCard ? (
            <MdFavorite
              onClick={handleRemoveFavoriteAction}
              size={25}
              aria-label="Remove from Favorites"
            />
          ) : (
            <MdFavoriteBorder
              onClick={handleAddFavoriteAction}
              size={25}
              aria-label="Add to Favorites"
            />
          )}
        </S.FavButton>

        {actionNavigate && (
          <S.IconButonContainer>
            {type === 'Character' && (
              <Tooltip title="Comics">
                <IconButton aria-label="Comics" onClick={() => actionNavigate!(id, type)}>
                  <FiBook size={20} color="black" />
                </IconButton>
              </Tooltip>
            )}

            {type === 'Comic' && (
              <Tooltip title="Characters">
                <IconButton
                  aria-label="Characters"
                  onClick={() => actionNavigate!(id, type)}>
                  <FiUser size={20} color="black" />
                </IconButton>
              </Tooltip>
            )}
          </S.IconButonContainer>
        )}

        <S.ButtonWrapper>
          <Button onClick={actionDetail} size="small">
            Detalhes
          </Button>
        </S.ButtonWrapper>
      </S.Content>
    </S.Wrapper>
  );
};
