import React from 'react';
import Showcase from '../../components/Showcase';

import highlightItem from './highlight';

import * as S from './styles';

export const Characters = () => (
  <S.Wrapper>
    <Showcase title="Marvel Personagens" highlight={highlightItem} />
  </S.Wrapper>
);
