import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType } from 'react';

import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  as?: ElementType;
} & ButtonTypes;

export const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  onClick,
  ...rest
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} onClick={onClick} {...rest}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);
