import React from 'react';
import Showcase from '../../components/Showcase';

import highlightItems from './highlight';

import * as S from './styles';

export const Comics = () => (
  <S.Wrapper>
    <Showcase title="Marvel Comics" highlight={highlightItems} />
  </S.Wrapper>
);
