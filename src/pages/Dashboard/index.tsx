import React from 'react';
import BannerSlider from '../../components/BannerSlider';

import items from './items';

import * as S from './styles';

export const Dashboard = () => (
  <S.Wrapper>
    <S.Container>
      <S.SectionBanner>
        <BannerSlider items={items} />
      </S.SectionBanner>
    </S.Container>
  </S.Wrapper>
);
