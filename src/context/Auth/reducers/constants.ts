import { SignInResponseDto } from '../../../models/dtos/session/SignInResponseDto';

export interface AuthState {
  user: SignInResponseDto;
}
export const AUTH_INITIAL_STATE: AuthState = {
  user: {} as SignInResponseDto,
};
