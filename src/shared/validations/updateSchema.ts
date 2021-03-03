/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from 'yup';

export const updateSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string().required('E-mail é obrigatória').email('Digite um e-mail válido'),
  old_password: Yup.string(),
  password: Yup.string().when('old_password', {
    is: (val: string | any[]) => !!val.length,
    then: Yup.string().required('Campo obrigatório'),
    otherwise: Yup.string(),
  }),

  password_confirmation: Yup.string()
    .when('old_password', {
      is: (val: string | any[]) => !!val.length,
      then: Yup.string().required('Campo obrigatório'),
      otherwise: Yup.string(),
    })
    .oneOf([Yup.ref('password'), null], 'Confirmação incorreta'),
});
