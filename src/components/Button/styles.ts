import { shade } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components';

import { ButtonProps } from '.';

type WrapperProps = Omit<ButtonProps, 'children'>;

const WrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,

  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};

    padding: ${theme.spacings.xxsmall} ${theme.spacings.xxxlarge};
  `,

  large: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.medium};

    padding: ${theme.spacings.xsmall} 10rem;
  `,

  fullWidth: () => css`
    width: 100%;
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    border: none;
    border-radius: ${theme.border.radius};
    cursor: pointer;
    text-decoration: none;
    padding: ${theme.spacings.xxsmall};
    transition: ${theme.transition.default};

    background: ${theme.colors.red};

    &:hover {
      background: ${shade(0.2, theme.colors.red)};
    }

    ${!!size && WrapperModifiers[size](theme)};
    ${!!fullWidth && WrapperModifiers.fullWidth()};
  `}
`;
