import { SignUpRequestDto } from '../models/dtos/user/SignUpRequestDto';
import { SignUpResponseDto } from '../models/dtos/user/SingUpResponseDto';
import { IDataResult } from '../models/IDataResult';
import { axiosPostApi } from '../shared/helpers/axios-helper';

export const useUserService = () => {
  const createAccount = async ({ name, email, password }: SignUpRequestDto) => {
    const body = {
      name,
      email,
      password,
    };

    try {
      const response = await axiosPostApi<IDataResult<SignUpResponseDto>>(
        '/user/create',
        body,
      );

      return response;
    } catch (err) {
      throw new Error(err);
    }
  };

  return { createAccount };
};
