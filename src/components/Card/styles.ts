import styled, { css } from 'styled-components';
import { placeholderShimmer } from '../../shared/utils/keyframes';

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
  `}
`;

export const ImageBox = styled.div`
  ${({ theme }) => css`
    height: 15rem;
    width: 100%;

    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;

    animation: ${placeholderShimmer} 1s linear infinite forwards;

    img {
      border-radius: ${theme.border.radius} ${theme.border.radius} 0 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    margin: ${theme.spacings.xsmall};
  `}
`;

export const Info = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 2.5rem);
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`;

export const Description = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
  `}
`;

export const FavButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    position: absolute;
    right: 0;
    top: -0.5rem;
    cursor: pointer;
  `}
`;

export const IconButonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: ${theme.spacings.xxsmall};
  `}
`;
