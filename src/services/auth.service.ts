import { api } from '../shared/helpers/api-helper';
import { SignUpRequestDto } from '../models/dtos/user/SignUpRequestDto';

export const useAuthService = () => {
  const createAccount = async ({ name, email, password }: SignUpRequestDto) => {
    const body = {
      name,
      email,
      password,
    };

    try {
      const response = await api.post('/user/create', body);

      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  };

  return { createAccount };
};
