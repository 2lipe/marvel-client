/* eslint-disable prefer-arrow-callback */
import React, { ReactNode } from 'react';

import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions/transition';

import * as S from './styles';
import { ButtonColors, ModalButton } from './ModalButton';

export type IconColors = 'primary' | 'alert' | 'danger';

export type ModalProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  iconColor?: IconColors;
  open: boolean;
  leftButtonColor?: ButtonColors;
  rightButtonColor?: ButtonColors;
  leftButtonLabel?: string;
  rightButtonLabel?: string;
  closeModal?: () => void;
  onClick?: () => void;
  onClose?: () => void;
};

const transition = React.forwardRef(function Transition(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Modal = ({
  title,
  description,
  open,
  icon,
  iconColor,
  leftButtonColor,
  rightButtonColor,
  leftButtonLabel,
  rightButtonLabel,
  onClose,
  onClick,
  closeModal,
}: ModalProps) => (
  <S.Container open={open} onClose={onClose} TransitionComponent={transition}>
    {!!icon && <S.Icon iconColor={iconColor}>{icon}</S.Icon>}
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.ButtonContainer>
      <ModalButton
        color={leftButtonColor}
        buttonText={leftButtonLabel}
        onClick={closeModal}
      />
      <ModalButton
        color={rightButtonColor}
        buttonText={rightButtonLabel}
        onClick={onClick}
      />
    </S.ButtonContainer>
  </S.Container>
);
