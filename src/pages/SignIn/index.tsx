import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { useSnackbar } from 'notistack';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';

import { ValidationError } from 'yup';
import { Input } from '../../components/Input';
import { Images } from '../../shared/utils/images';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { AUTHENTICATION_PATH } from '../../routes/auth.routes';
import { SignInRequestDto } from '../../models/dtos/SignInRequestDto';
import { useAuth } from '../../context/authentication/authContext';
import { signInSchema } from '../../shared/validations/authSchema';
import { getValidationErrors } from '../../shared/utils/getValidationErros';
import { AUTH_MESSAGES } from '../../shared/helpers/message-helper';

import * as S from './styles';

export const SignIn = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmitFormLogin = useCallback(
    async (data: SignInRequestDto) => {
      try {
        formRef.current?.setErrors({});

        await signInSchema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        enqueueSnackbar(AUTH_MESSAGES.loginFail, { variant: 'error' });
      }
    },
    [enqueueSnackbar, signIn],
  );

  return (
    <S.Wrapper src={Images.herosLoginImage} role="img" aria-label="Marvel heros">
      <S.LoginForm ref={formRef} onSubmit={handleSubmitFormLogin}>
        <S.LogoContainer>
          <Logo />
        </S.LogoContainer>

        <S.Title>Sign In</S.Title>

        <Input name="email" icon={FiMail} placeholder="E-mail" />

        <Input name="password" type="password" icon={FiLock} placeholder="Senha" />

        <S.ButtonContainer>
          <Button fullWidth>Entrar</Button>
        </S.ButtonContainer>

        <S.CreateAccountLink to={AUTHENTICATION_PATH.SignUp}>
          <FiLogIn />
          Criar conta
        </S.CreateAccountLink>
      </S.LoginForm>
    </S.Wrapper>
  );
};
