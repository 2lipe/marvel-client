import styled, { css, DefaultTheme } from 'styled-components';
import { Tooltip } from '../Tooltip';

type WrapperProps = {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
};

const WrapperModifiers = {
  withFocus: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    border-color: ${theme.colors.white};
  `,

  withFill: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,

  withError: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.red};
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isFocused, isFilled, isErrored }) => css`
    display: flex;
    align-items: center;
    width: 100%;

    background: ${theme.colors.gray3};
    border: 0.2rem solid ${theme.colors.gray3};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xsmall};
    color: ${theme.colors.white};

    & + div {
      margin-top: ${theme.spacings.xxsmall};
    }

    input {
      flex: 1;
      background: transparent;
      border: 0;
      outline: none;
      color: ${theme.colors.smooth};

      &::placeholder {
        color: ${theme.colors.white};
      }
    }

    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px ${theme.colors.gray3} inset;
      box-shadow: 0 0 0 1000px ${theme.colors.gray3} inset;
      -webkit-text-fill-color: ${theme.colors.smooth} !important;
    }

    > svg {
      margin-right: ${theme.spacings.xsmall};
    }

    ${!!isFocused && WrapperModifiers.withFocus(theme)}
    ${!!isFilled && WrapperModifiers.withFill(theme)}
    ${!!isErrored && WrapperModifiers.withError(theme)}
  `}
`;

export const ErrorWrapper = styled(Tooltip)`
  height: 2rem;
  margin-left: 2rem;

  > svg {
    margin: 0;
  }
`;
