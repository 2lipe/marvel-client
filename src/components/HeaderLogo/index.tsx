import React from 'react';

import * as S from './styles';

export type LogoProps = {
  color?: 'white' | 'red';
  size?: 'normal' | 'large';
};

export const HeaderLogo = ({ color = 'red', size = 'normal' }: LogoProps) => (
  <S.Wrapper color={color} size={size}>
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      aria-label="Marvel 'M' Logo"
      xmlns="http://www.w3.org/2000/svg">
      <rect x="6" width="25.5" height="36" fill="#E62429" />
      <path
        d="M27.632 2.77407V33.2114H22.179V18.54L19.7521 33.2114H16.8751L14.4121 18.54V33.2114H9V2.77338H15.873L18.2857 18.5012L20.7623 2.77407H27.632Z"
        fill="white"
      />
    </svg>
  </S.Wrapper>
);
