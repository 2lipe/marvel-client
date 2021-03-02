import React from 'react';
import BannerSlider from '../../components/BannerSlider';
import { Heading } from '../../components/Heading';
import { useAuthenticationContext } from '../../context/Auth/reducers/authContext';

import items from './items';

import * as S from './styles';

export const Dashboard = () => (
  <S.Wrapper>
    <S.Container>
      <Heading lineLeft>Dashboard</Heading>
      <S.SectionBanner>
        <BannerSlider items={items} />
      </S.SectionBanner>
    </S.Container>
  </S.Wrapper>
);
