import React from 'react';
import { Button } from '../Button';

import * as S from './styles';

export type HighlightProps = {
  title: string;
  subtitle: string;
  buttonLabel?: string;
  buttonLink?: string;
  backgroundImage: string;
  alignment?: 'right' | 'left';
};

export const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
  alignment = 'right',
}: HighlightProps) => (
  <S.Wrapper alignment={alignment} backgroundImage={backgroundImage}>
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>

      {buttonLink && <Button href={buttonLink}>{buttonLabel}</Button>}
    </S.Content>
  </S.Wrapper>
);
