import styled, { css } from 'styled-components';
import { shade } from 'polished';

import { Media } from '../../shared/helpers/media-helper';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
  `}
`;

export const CustomMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const HeadingContainer = styled.div`
  margin-right: 3rem;
`;

export const CustomDiv = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xlarge} 15%;
    display: flex;
    flex-direction: column;

    @media ${Media.maxWidth.ms} {
      padding: ${theme.spacings.xlarge} 5%;
    }

    & .MuiRadio-colorPrimary.Mui-checked {
      color: ${theme.colors.red};
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: ${theme.spacings.xxsmall} auto 0;
    width: 100%;
    max-width: 70rem;

    @media ${Media.maxWidth.ms} {
      padding: ${theme.spacings.xlarge} 5%;
    }

    form {
      margin: ${theme.spacings.xxxlarge} 0;
      width: 38rem;

      text-align: center;
      display: flex;
      flex-direction: column;

      h1 {
        margin-bottom: ${theme.spacings.small};
        font-size: ${theme.font.sizes.xlarge};
        text-align: left;
      }

      a {
        color: ${theme.colors.white};
        display: block;
        margin-top: ${theme.spacings.small};
        text-decoration: none;
        transition: color ${theme.transition.default};

        &:hover {
          color: ${shade(0.2, theme.colors.smooth)};
        }
      }

      input[name='old_password'] {
        margin-top: ${theme.spacings.small};
      }
    }
  `}
`;
