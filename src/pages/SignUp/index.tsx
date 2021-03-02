import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { FiArrowLeft, FiLock, FiUser } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Images } from '../../utils/images';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { AUTHENTICATION_PATH } from '../../routes/auth.routes';

import * as S from './styles';

export const SignUp = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmitLogin = useCallback(async () => {
    try {
      formRef.current?.setErrors({});
    } catch (err) {
      formRef.current?.setErrors(err);
    }
  }, []);

  return (
    <S.Wrapper src={Images.herosLoginImage} role="img" aria-label="Marvel heros">
      <S.LoginForm ref={formRef} onSubmit={handleSubmitLogin}>
        <S.LogoContainer>
          <Logo />
        </S.LogoContainer>

        <S.Title>Sign Up</S.Title>

        <Input name="name" type="text" icon={FiUser} placeholder="Nome" />

        <Input name="email" type="password" icon={FiLock} placeholder="E-mail" />

        <Input name="password" type="password" icon={FiLock} placeholder="Senha" />

        <S.ButtonContainer>
          <Button fullWidth>Criar conta</Button>
        </S.ButtonContainer>

        <S.ReturnToLoginLink to={AUTHENTICATION_PATH.SignIn}>
          <FiArrowLeft />
          Voltar para logon
        </S.ReturnToLoginLink>
      </S.LoginForm>
    </S.Wrapper>
  );
};
