import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
  `}
`;

export const InpuContainer = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    align-items: center;
    max-width: 100rem;
    margin-bottom: ${theme.spacings.small};
  `}
`;
