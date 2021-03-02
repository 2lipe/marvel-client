import { SignInResponseDto } from '../../models/dtos/user/SingInResponseDto';

export interface AuthState {
  user: SignInResponseDto;
}

export const AUTH_INITIAL_STATE: AuthState = {
  user: {} as SignInResponseDto,
};
