import React from 'react';
import LazyLoad from 'react-lazyload';
import { Button } from '../Button';

import * as S from './styles';

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
};

const Banner = ({ img, title, subtitle, buttonLabel, buttonLink }: BannerProps) => (
  <LazyLoad>
    <S.Wrapper>
      <S.Image src={img} role="img" aria-label={title} />

      <S.Caption>
        <S.Title>{title}</S.Title>
        <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
        <Button as="a" href={buttonLink} size="medium">
          {buttonLabel}
        </Button>
      </S.Caption>
    </S.Wrapper>
  </LazyLoad>
);

export default Banner;
