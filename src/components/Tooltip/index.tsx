import React, { ReactNode } from 'react';

import * as S from './styles';

export type TooltipProps = {
  variant?: 'error' | 'default';
  title: string;
  children: ReactNode;
  className?: string;
};

export const Tooltip = ({
  variant = 'default',
  children,
  title,
  className = '',
}: TooltipProps) => (
  <S.Wrapper variant={variant} className={className}>
    <span>{title}</span>
    {children}
  </S.Wrapper>
);
