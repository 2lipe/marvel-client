import React, { ReactNode } from 'react';
import LazyLoad from 'react-lazyload';

import { Images } from '../../shared/utils/images';

import * as S from './styles';

type AuthWrapperProps = {
  children: ReactNode;
};

export const AuthWrapper = ({ children }: AuthWrapperProps) => (
  <LazyLoad>
    <S.Wrapper src={Images.herosLoginImage} role="img" aria-label="Marvel heros">
      {children}
    </S.Wrapper>
  </LazyLoad>
);
