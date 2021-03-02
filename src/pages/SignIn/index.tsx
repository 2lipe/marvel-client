import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Images } from '../../utils/images';

import * as S from './styles';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';

export const SignIn = () => {
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

        <S.Title>Sign In</S.Title>

        <Input name="email" icon={FiMail} placeholder="E-mail" />

        <Input name="password" type="password" icon={FiLock} placeholder="Senha" />

        <S.ButtonContainer>
          <Button fullWidth>Entrar</Button>
        </S.ButtonContainer>

        <S.Link>
          <FiLogIn />
          Criar conta
        </S.Link>
      </S.LoginForm>
    </S.Wrapper>
  );
};
