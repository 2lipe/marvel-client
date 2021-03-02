import * as Yup from 'yup';

export const signUpSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string().required('Email obrigatório').email('Digite um e-mail válido'),
  password: Yup.string().min(6, 'Senha obrigatória no mínimo 6 dígitos'),
});

export const signInSchema = Yup.object().shape({
  email: Yup.string().required('Email obrigatório').email('Digite um e-mail válido'),
  password: Yup.string().required('Senha obrigatória'),
});
