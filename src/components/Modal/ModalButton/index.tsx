import React, { ElementType, HTMLAttributes, ReactNode } from 'react';
import Ripples from 'react-ripples';

import * as S from './styles';

type ButtonType = HTMLAttributes<HTMLButtonElement>;

export type ButtonColors = 'primary' | 'alert' | 'danger' | 'default';

export type ModalButtonProps = {
  buttonText?: string;
  buttonIcon?: ReactNode;
  color?: ButtonColors;
  hasIcon?: boolean;
  as?: ElementType;
} & ButtonType;

export const ModalButton = ({
  buttonText,
  buttonIcon,
  color = 'primary',
  ...rest
}: ModalButtonProps) => (
  <S.ButtonContainer>
    <Ripples>
      <S.ButtonContent color={color} hasIcon={!!buttonIcon} {...rest}>
        <S.ButtonText>{buttonText}</S.ButtonText>
        {!!buttonIcon && buttonIcon}
      </S.ButtonContent>
    </Ripples>
  </S.ButtonContainer>
);
