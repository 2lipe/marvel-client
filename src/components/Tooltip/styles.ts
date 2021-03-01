import styled, { css, DefaultTheme } from 'styled-components';

import { TooltipProps } from '.';

type WrapperProps = Pick<TooltipProps, 'variant'>;

const WrapperModifiers = {
  default: (theme: DefaultTheme) => css`
    > span {
      color: ${theme.colors.gray6};
      background-color: ${theme.colors.orange};

      &::before {
        border-color: ${theme.colors.orange} transparent;
      }
    }
  `,

  error: (theme: DefaultTheme) => css`
    > span {
      color: ${theme.colors.white};
      background-color: ${theme.colors.red};

      &::before {
        border-color: ${theme.colors.red} transparent;
      }
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, variant }) => css`
    position: relative;

    > span {
      width: ${theme.spacings.xsmall};
      padding: ${theme.spacings.xxsmall};
      border-radius: ${theme.border.radius};
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.bold};

      opacity: 0;
      transition: opacity ${theme.transition.default};
      visibility: hidden;
      position: absolute;

      bottom: calc(100% + ${theme.spacings.xsmall});
      left: 50%;
      transform: translateX(-50%);

      &::before {
        content: '';
        border-style: solid;
        border-width: ${theme.spacings.xxsmall} ${theme.spacings.xxsmall} 0
          ${theme.spacings.xxsmall};
        top: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    &:hover span {
      opacity: 1;
      visibility: visible;
    }

    ${!!variant && WrapperModifiers[variant](theme)};
  `}
`;
