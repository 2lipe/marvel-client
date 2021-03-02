import React, { ReactNode, useState } from 'react';
import { IconButton } from '@material-ui/core';
import { FiPower } from 'react-icons/fi';
import { GoAlert } from 'react-icons/go';
import { FaUserCircle } from 'react-icons/fa';

import { useAuthenticationContext } from '../../context/Auth/reducers/authContext';
import { AuthAsyncActions } from '../../context/Auth/actions/authAsyncAction';
import { Modal } from '../Modal';

import * as S from './styles';
import { Logo } from '../Logo';

export type LayoutProps = {
  headerActive: boolean;
  children: ReactNode;
};

export const Layout = ({ children, headerActive }: LayoutProps) => {
  const [modal, setModal] = useState<boolean>(false);

  const { state } = useAuthenticationContext();
  const { signOutRequestAction } = AuthAsyncActions();

  const name = state.user.userName;

  console.log(name);

  const handleModalAction = () => setModal(!modal);

  const signOutAction = () => {
    signOutRequestAction();
  };

  return (
    <S.Wrapper>
      {headerActive && (
        <S.Header>
          <div>
            <Logo />
            <S.ProfileContainer>
              <strong>Bem-vindo</strong>
              <S.Title>{name}</S.Title>
            </S.ProfileContainer>
          </div>

          <div>
            <IconButton onClick={handleModalAction}>
              <FaUserCircle size={24} fontSize="bold" />
            </IconButton>

            <IconButton onClick={handleModalAction}>
              <FiPower size={24} fontSize="bold" />
            </IconButton>
          </div>
        </S.Header>
      )}

      {children}

      {modal && (
        <Modal
          icon={<GoAlert size={35} />}
          iconColor="danger"
          open={modal}
          onClose={handleModalAction}
          closeModal={handleModalAction}
          onClick={signOutAction}
          title="Sair"
          description="Você tem certeza que deseja sair da aplicação?"
          leftButtonColor="default"
          rightButtonColor="danger"
          leftButtonLabel="Agora não"
          rightButtonLabel="Sair"
        />
      )}
    </S.Wrapper>
  );
};
