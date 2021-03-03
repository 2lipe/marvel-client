import { CircularProgress } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const DivLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CustomLoading = styled(CircularProgress)`
  ${({ theme }) => css`
    &.MuiCircularProgress-colorPrimary {
      color: ${theme.colors.red};
      size: 36px;
    }
  `}
`;
