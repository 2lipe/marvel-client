import styled, { css } from 'styled-components';

type WrapperProps = {
  src: string;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ src }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;

    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.3)
      ),
      url(${src}) top left / cover no-repeat;
    background-position: center center;
    background-size: cover;
  `}
`;
