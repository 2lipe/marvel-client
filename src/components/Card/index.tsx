/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IconButton, Tooltip } from '@material-ui/core';
import React, { useState } from 'react';
import { FiBook, FiUser } from 'react-icons/fi';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { InfoCard, typeCard } from '../../models/dtos/marvel/Card';
import { Button } from '../Button';

import * as S from './styles';

export type CardProps = {
  id: string;
  title: string;
  type: typeCard;
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

  const handleAddFavoriteAction = async () => {
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
  };

  const handleRemoveFavoriteAction = async () => {
    if (actionRemoveFavorite) {
      const response = await actionRemoveFavorite(id);

      setFavoriteCard(response);
    }
  };

  const actionDetail = () => {
    window.location.href = linkDetail;
  };

  return (
    <S.Wrapper>
      <S.ImageBox>
        <img src={imgUrl} alt={title} />
      </S.ImageBox>

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
          <>
            {type === 'Character' && (
              <Tooltip title="Comics">
                <IconButton aria-label="Comics" onClick={() => actionNavigate!(id, type)}>
                  <FiBook color="white" />
                </IconButton>
              </Tooltip>
            )}

            {type === 'Comic' && (
              <Tooltip title="Characters">
                <IconButton
                  aria-label="Characters"
                  onClick={() => actionNavigate!(id, type)}>
                  <FiUser color="white" />
                </IconButton>
              </Tooltip>
            )}
          </>
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
