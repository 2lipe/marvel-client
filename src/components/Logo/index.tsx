import React from 'react';

import * as S from './styles';

export type LogoProps = {
  color?: 'white' | 'red';
  size?: 'normal' | 'large';
};

export const Logo = ({ color = 'red', size = 'normal' }: LogoProps) => (
  <S.Wrapper color={color} size={size}>
    <svg
      width="102"
      height="40"
      viewBox="0 0 102 40"
      fill="none"
      aria-label="Marvel Logo"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0H102V40H0V0Z" fill="currentColor" />
      <path
        d="M99.0357 30.8148V36.8964H87.5474V3.07715H93.734V30.8148H99.0357ZM49.947 19.661C49.4684 19.8871 48.9678 19.9995 48.4798 20.001V9.12407H48.5112C48.9992 9.12023 52.6414 9.26561 52.6414 14.5033C52.6414 17.241 51.4017 18.9679 49.947 19.661ZM31.8161 26.3387L33.5289 11.8779L35.3061 26.3387H31.8161ZM86.4685 9.25023V3.08253H68.9512L66.0677 23.6818L63.2196 3.08176H56.9018L57.6088 8.58176C56.8807 7.17253 54.2946 3.08176 48.6014 3.08176C48.5645 3.08023 42.2774 3.08176 42.2774 3.08176L42.2531 33.1064L37.649 3.08253L29.3752 3.07869L24.611 34.1864L24.6126 3.08253H16.695L13.8406 20.5571L11.0599 3.08176H3.13843V36.9018H9.37612V20.6002L12.2149 36.9018H15.5306L18.3278 20.6002V36.9018H30.3536L31.0817 31.7002H35.9228L36.6501 36.9018L48.4562 36.9079H48.4641V36.9018H48.4798V25.9248L49.9274 25.7171L52.9223 36.9095H59.0297L59.0282 36.9018H59.0454L55.1137 23.7879C57.1051 22.3418 59.3553 18.6771 58.7567 15.1702V15.1687C58.763 15.2133 62.4671 36.9233 62.4671 36.9233L69.7295 36.9025L74.6938 6.24869V36.9025H86.4685V30.8195H80.8789V23.0656H86.4685V16.8887H80.8789V9.24946H86.4685V9.25023Z"
        fill="#F2F2F2"
      />
    </svg>
  </S.Wrapper>
);