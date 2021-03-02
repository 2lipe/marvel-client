import styled, { css } from 'styled-components';
import { Form } from '@unform/web';
import { shade } from 'polished';
import { Link } from 'react-router-dom';
import { appearFromTop } from '../../shared/utils/keyframes';

type WrapperProps = {
  src: string;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ src }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

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

export const LoginForm = styled(Form)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 60rem;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.7)
    );

    animation: ${appearFromTop} 1.5s;

    width: 100%;
    border-radius: ${theme.border.radius};

    max-width: 45rem;
    padding: 6rem 6.8rem 4rem;
  `}
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxxlarge};
  `}
`;

export const LogoContainer = styled.div`
  position: relative;
  top: -8rem;
  margin: 0 auto;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    margin-bottom: ${theme.spacings.large};
    text-align: center;
  `}
`;

export const ReturnToLoginLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-top: 2.5rem;

    text-decoration: none;
    transition: color ${theme.transition.default};
    cursor: pointer;
    font-size: ${theme.font.sizes.small};

    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      margin-right: ${theme.spacings.xxsmall};
    }

    &:hover {
      color: ${shade(0.2, `${theme.colors.red}`)};
    }
  `}
`;
