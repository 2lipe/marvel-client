import styled, { css } from 'styled-components';
import { Grid } from '@material-ui/core';
import { Media } from '../../shared/helpers/media-helper';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: ${theme.colors.white};
    padding: 0px 15%;

    @media ${Media.maxWidth.ms} {
      padding: 0px 5%;
    }
  `}
`;

export const DivTitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    justify-content: center;

    > h4 {
      font-weight: bold;
      color: ${theme.colors.gray3};
    }
  `}
`;

export const CustomDiv = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xlarge} 15%;

    > h3 {
      font-size: ${theme.font.sizes.xxlarge};
      font-family: Arial, Helvetica, sans-serif;
      color: ${theme.colors.red};
      font-weight: bold;
      padding-bottom: ${theme.spacings.xsmall};
    }

    @media ${Media.maxWidth.ms} {
      padding: ${theme.spacings.xlarge} 5%;
    }
  `}
`;

export const CustomGrid = styled(Grid)`
  &.MuiGrid-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
