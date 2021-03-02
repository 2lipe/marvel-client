import styled, { css, DefaultTheme } from 'styled-components';
import Dialog from '@material-ui/core/Dialog';
import { lighten } from 'polished';
import { IconColors, ModalProps } from '.';

export const Container = styled(Dialog)`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    justify-content: center;

    .MuiDialog-paper {
      position: relative;
      overflow-y: auto;
      border: 0.1rem solid ${theme.colors.gray2};
      padding: ${theme.spacings.large} ${theme.spacings.medium};
      border-radius: ${theme.border.radius10};
      box-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.1);
    }
  `}
`;

type IconProps = Pick<ModalProps, 'iconColor'>;

const IconModifiers = {
  color: (theme: DefaultTheme, iconColor: IconColors) => css`
    color: ${theme.colors[iconColor]};
    background-color: ${lighten(0.3, theme.colors[iconColor])};
  `,
};

export const Icon = styled.div<IconProps>`
  ${({ theme, iconColor }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${theme.spacings.small};
    align-self: center;
    height: 72px;
    width: 72px;
    border-radius: 50%;

    // TODO: Criar Tipos de Modais EX: "Warning | Danger | Default"
    ${!!iconColor && IconModifiers.color(theme, iconColor)}
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.gray2};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    text-align: center;

    margin-top: ${theme.spacings.medium};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    max-width: 380px;
    color: ${theme.colors.gray3};
    font-size: ${theme.font.sizes.small};
    text-align: center;

    margin-top: ${theme.spacings.xsmall};
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: ${theme.spacings.medium};
  `}
`;
