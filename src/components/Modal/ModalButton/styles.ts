/* eslint-disable indent */
import styled, { css, DefaultTheme } from 'styled-components';
import { shade } from 'polished';

import { ButtonColors, ModalButtonProps } from '.';

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius10};
    display: inline-flex;
    overflow: hidden;
    padding: 0.5rem;
  `}
`;

type ButtonContentProps = ModalButtonProps;

const ButtonContentModifiers = {
  withIcon: (theme: DefaultTheme) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    > p {
      margin-left: ${theme.spacings.xxsmall};
      padding-right: ${theme.spacings.small};
    }
  `,

  color: (theme: DefaultTheme, color: ButtonColors) => css`
    background-color: ${theme.colors[color]};

    p {
      color: ${theme.colors[color] === '#F2F2F2'
        ? theme.colors.gray2
        : theme.colors.white};
    }

    &:hover {
      background-color: ${shade(0.2, theme.colors[color])};
    }
  `,
};

export const ButtonContent = styled.button<ButtonContentProps>`
  ${({ theme, hasIcon, color }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border: none;
    outline: none;

    width: 16rem;
    height: ${theme.spacings.xxxlarge};

    border-radius: ${theme.border.radius};
    transition: ${theme.transition.default};

    ${!!color && ButtonContentModifiers.color(theme, color)}
    ${!!hasIcon && ButtonContentModifiers.withIcon(theme)};
  `}
`;

export const ButtonText = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};
  `}
`;
