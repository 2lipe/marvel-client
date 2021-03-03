import { IconButton } from '@material-ui/core';
import React from 'react';

import * as S from './styles';

export type LineColors = 'primary' | 'secondary';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  lineLeft?: boolean;
  lineBottom?: boolean;
  lineColor?: LineColors;
  size?: 'small' | 'medium' | 'huge';
  navigateToDashboard?: () => void;
};

export const Heading = ({
  children,
  color = 'black',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'primary',
  size = 'medium',
  navigateToDashboard,
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    lineColor={lineColor}
    size={size}>
    {navigateToDashboard && (
      <IconButton>
        <S.CustomArrowBackIcon onClick={navigateToDashboard} />
      </IconButton>
    )}

    <S.CustomContainer>{children}</S.CustomContainer>
  </S.Wrapper>
);
