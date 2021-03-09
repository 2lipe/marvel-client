/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useCallback, useRef, useState } from 'react';
import { FormHandles, SubmitHandler } from '@unform/core';
import { useSnackbar } from 'notistack';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';

import { ValidationError } from 'yup';
import { Input } from '../../components/Input';
import { Images } from '../../shared/utils/images';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { AUTHENTICATION_PATH } from '../../routes/auth.routes';
import { SignInRequestDto } from '../../models/dtos/session/SignInRequestDto';
import { signInSchema } from '../../shared/validations/authSchema';
import { getValidationErrors } from '../../shared/utils/getValidationErros';
import { AUTH_MESSAGES } from '../../shared/helpers/message-helper';
import { AuthAsyncActions } from '../../context/Auth/actions/authAsyncAction';
import { Loading } from '../../components/Loading';

import * as S from './styles';

export const SignIn = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);

  const { signInRequestAction } = AuthAsyncActions();
  const { enqueueSnackbar } = useSnackbar();

  const signInAction = useCallback(
    async (data: SignInRequestDto) => {
      try {
        setLoading(true);

        const response = await signInRequestAction(data);

        setLoading(false);
        return response;
      } catch (err) {
        setLoading(false);
        enqueueSnackbar(AUTH_MESSAGES.invalidCredentials, { variant: 'error' });

        return err;
      }
    },
    [enqueueSnackbar, signInRequestAction],
  );

  const handleSubmitFormLogin: SubmitHandler<SignInRequestDto> = useCallback(
    async (data: SignInRequestDto) => {
      try {
        formRef.current?.setErrors({});

        await signInSchema.validate(data, {
          abortEarly: false,
        });

        setLoading(true);

        await signInAction(data);

        setLoading(false);
      } catch (err) {
        setLoading(false);

        if (err instanceof ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        enqueueSnackbar(AUTH_MESSAGES.loginFail, { variant: 'error' });
      }
    },
    [signInAction, enqueueSnackbar],
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

        {loading && <Loading />}

        {!loading && (
          <S.ButtonContainer>
            <Button fullWidth>Entrar</Button>
          </S.ButtonContainer>
        )}

        <S.CreateAccountLink to={AUTHENTICATION_PATH.SignUp}>
          <FiLogIn />
          Criar conta
        </S.CreateAccountLink>
      </S.LoginForm>
    </S.Wrapper>
  );
};
