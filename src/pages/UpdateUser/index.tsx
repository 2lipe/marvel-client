/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { ValidationError } from 'yup';
import { Heading } from '../../components/Heading';
import { getValidationErrors } from '../../shared/utils/getValidationErros';
import { IRequestUpdateProfile } from '../../models/Interfaces/IRequestUpdateProfile';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { AuthAsyncActions } from '../../context/Auth/actions/authAsyncAction';
import { useAuthenticationContext } from '../../context/Auth/reducers/authContext';
import { Loading } from '../../components/Loading';
import { USER_PATH } from '../../routes/user.routes';
import { updateSchema } from '../../shared/validations/updateSchema';
import { AUTH_MESSAGES } from '../../shared/helpers/message-helper';

import * as S from './styles';

type ProfileFormData = {
  name: string;
  email: string;
  old_password?: string;
  password?: string;
  password_confirmation?: string;
};

export const UpdateUser = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { updateRequestAction } = AuthAsyncActions();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const { state } = useAuthenticationContext();

  const { user } = state;

  const initialData: ProfileFormData = {
    email: user.email,
    name: user.userName,
  };

  const backToHomePage = useCallback(() => {
    history.push(USER_PATH.Dashboard);
  }, [history]);

  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        await updateSchema.validate(data, {
          abortEarly: false,
        });

        setLoading(true);

        const updateRequest: IRequestUpdateProfile = {
          name: data.name,
          email: data.email,
          password: data.password,
          oldPassword: data.old_password,
        };

        await updateRequestAction(updateRequest);

        enqueueSnackbar(AUTH_MESSAGES.updateSuccess, { variant: 'success' });

        setLoading(false);
        history.push(USER_PATH.Dashboard);
      } catch (err) {
        if (err instanceof ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
        enqueueSnackbar(AUTH_MESSAGES.updateFail, { variant: 'error' });
      }
    },
    [enqueueSnackbar, history, updateRequestAction],
  );

  return (
    <S.CustomMainContainer>
      <Heading navigateToDashboard={backToHomePage}>Meu perfil</Heading>

      <S.CustomDiv>
        <S.Content>
          <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
            <Input name="name" icon={FiUser} placeholder="Nome" />

            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Input
              containerStyle={{ marginTop: 24 }}
              name="old_password"
              icon={FiLock}
              type="password"
              placeholder="Senha atual"
            />

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Nova senha"
            />

            <Input
              name="password_confirmation"
              icon={FiLock}
              type="password"
              placeholder="Confirmar senha"
            />

            {loading ? (
              <Loading />
            ) : (
              <Button type="submit" disabled={loading}>
                Confirmar mudanças
              </Button>
            )}
          </Form>
        </S.Content>
      </S.CustomDiv>
    </S.CustomMainContainer>
  );
};
