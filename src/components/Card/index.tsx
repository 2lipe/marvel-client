import React from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { Button } from '../Button';

import * as S from './styles';

export type CardProps = {
  title: string;
  description: string;
  img: string;
  favorite?: boolean;
  onFav?: () => void;
};

export const Card = ({ title, description, img, favorite = false, onFav }: CardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>

    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Info>

      <S.FavButton onClick={onFav} role="button">
        {favorite ? (
          <MdFavorite size={25} aria-label="Remove from Favorites" />
        ) : (
          <MdFavoriteBorder size={25} aria-label="Add to Favorites" />
        )}
      </S.FavButton>

      <S.ButtonWrapper>
        <Button size="small">Detalhes</Button>
      </S.ButtonWrapper>
    </S.Content>
  </S.Wrapper>
);
