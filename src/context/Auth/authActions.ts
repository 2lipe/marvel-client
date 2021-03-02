import { SignInResponseDto } from '../../models/dtos/user/SingInResponseDto';
import { GenericContext } from '../genericContext';

// eslint-disable-next-line no-shadow
export enum AuthActions {
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  UPDATE_SUCCESS = 'UPDATE_SUCCESS',
  UPDATE_FAILURE = 'UPDATE_FAILURE',
  LOGOUT = 'LOGOUT',
}

export type AuthenticationAction =
  | GenericContext<AuthActions.LOGIN_SUCCESS, SignInResponseDto>
  | GenericContext<AuthActions.LOGIN_FAILURE>
  | GenericContext<AuthActions.UPDATE_SUCCESS, SignInResponseDto>
  | GenericContext<AuthActions.UPDATE_FAILURE>
  | GenericContext<AuthActions.LOGOUT>;
