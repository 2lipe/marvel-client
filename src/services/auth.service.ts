import { axiosPostApi } from '../shared/helpers/axios-helper';
import { SignInRequestDto } from '../models/dtos/session/SignInRequestDto';
import { SignInResponseDto } from '../models/dtos/session/SignInResponseDto';
import { IDataResult } from '../models/dtos/user/IUserResult';

export const useAuthService = () => {
  const createSession = async (data: SignInRequestDto) => {
    try {
      const response = await axiosPostApi<IDataResult<SignInResponseDto>>(
        '/user/session',
        data,
      );

      return response;
    } catch (err) {
      throw new Error(err);
    }
  };

  return { createSession };
};
