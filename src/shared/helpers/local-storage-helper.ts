import { SignInResponseDto } from '../../models/dtos/user/SingInResponseDto';

export const saveUserLocalStorage = (data: SignInResponseDto) => {
  localStorage.setItem('@stone-marvel:user', JSON.stringify(data));
};

export const getUserLocalStorage = () => {
  const userString = localStorage.getItem('@stone-marvel:user');

  if (userString) {
    const user: SignInResponseDto = JSON.parse(userString);

    return user;
  }

  return null;
};

export const removeUserLocalStorage = () => {
  localStorage.removeItem('@stone-marvel:user');
};
