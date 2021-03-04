import React, { useCallback, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ValidationError } from 'yup';
import { useSnackbar } from 'notistack';
import { FormHandles } from '@unform/core';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { AUTHENTICATION_PATH } from '../../routes/auth.routes';
import { getValidationErrors } from '../../shared/utils/getValidationErros';
import { signUpSchema } from '../../shared/validations/authSchema';
import { SignUpRequestDto } from '../../models/dtos/user/SignUpRequestDto';
import { AUTH_MESSAGES } from '../../shared/helpers/message-helper';
import { Loading } from '../../components/Loading';
import { useUserService } from '../../services/user.service';

import * as S from './styles';
import { AuthWrapper } from '../../components/AuthWrapper';

export const SignUp = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);

  const { createAccount } = useUserService();
  const { enqueueSnackbar } = useSnackbar();

  const history = useHistory();

  const handleSubmitFormCreateAccount = useCallback(
    async (data: SignUpRequestDto) => {
      try {
        formRef.current?.setErrors({});

        await signUpSchema.validate(data, {
          abortEarly: false,
        });

        setLoading(true);

        await createAccount(data);

        setLoading(false);

        history.push(AUTHENTICATION_PATH.SignIn);

        enqueueSnackbar(AUTH_MESSAGES.createAccountSuccess, { variant: 'success' });
      } catch (err) {
        setLoading(false);

        if (err instanceof ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        enqueueSnackbar(AUTH_MESSAGES.createAccountFail, { variant: 'error' });
      }
    },
    [createAccount, enqueueSnackbar, history],
  );

  return (
    <AuthWrapper>
      <S.SignUpForm ref={formRef} onSubmit={handleSubmitFormCreateAccount}>
        <S.LogoContainer>
          <Logo />
        </S.LogoContainer>

        <S.Title>Sign Up</S.Title>

        <Input name="name" type="text" icon={FiUser} placeholder="Nome" />

        <Input name="email" type="email" icon={FiMail} placeholder="E-mail" />

        <Input name="password" type="password" icon={FiLock} placeholder="Senha" />

        {loading && <Loading />}

        {!loading && (
          <S.ButtonContainer>
            <Button fullWidth>Criar conta</Button>
          </S.ButtonContainer>
        )}

        <S.ReturnToLoginLink to={AUTHENTICATION_PATH.SignIn}>
          <FiArrowLeft />
          Voltar para logon
        </S.ReturnToLoginLink>
      </S.SignUpForm>
    </AuthWrapper>
  );
};
