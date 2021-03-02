import styled, { css } from 'styled-components';
import { Media } from '../../shared/helpers/media-helper';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.1)
    );

    padding: ${theme.spacings.xsmall} 15%;
    width: 100%;

    @media ${Media.maxWidth.ms} {
      padding: ${theme.spacings.xsmall} 5%;
    }

    > div {
      display: flex;

      > img {
        @media ${Media.maxWidth.ms} {
          display: none;
        }
      }
    }
  `}
`;

export const ProfileContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    > strong {
      font-size: ${theme.font.sizes.small};
      padding: 0px ${theme.spacings.xxsmall};
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    padding: 0.5rem ${theme.spacings.xxsmall};
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${theme.colors.gray4};
    padding: 0.4rem;
  `}
`;
