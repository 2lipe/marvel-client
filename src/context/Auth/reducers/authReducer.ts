/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { SignInResponseDto } from '../../../models/dtos/session/SignInResponseDto';
import { CONTEXT_MESSAGES } from '../../../shared/helpers/message-helper';
import { GenericContext } from '../../genericContext';
import { AuthActions } from '../types/authTypes';
import { AuthState } from './constants';

export type AuthenticationDispatch = (action: AuthenticationAction) => void;

export function authReducer(state: AuthState, action: AuthenticationAction): AuthState {
  switch (action.type) {
    case AuthActions.LOGIN_SUCCESS: {
      return { ...state, user: action.payload ?? ({} as SignInResponseDto) };
    }
    case AuthActions.UPDATE_SUCCESS: {
      return { ...state, user: action.payload ?? ({} as SignInResponseDto) };
    }
    case AuthActions.UPDATE_FAILURE: {
      return { ...state };
    }
    case AuthActions.LOGIN_FAILURE: {
      return { ...state };
    }
    case AuthActions.LOGOUT: {
      return { user: {} as SignInResponseDto };
    }
    default: {
      throw new Error(`${CONTEXT_MESSAGES.actionNotIdentified} ${action!.type}`);
    }
  }
}

type AuthenticationAction =
  | GenericContext<AuthActions.LOGIN_SUCCESS, SignInResponseDto>
  | GenericContext<AuthActions.LOGIN_FAILURE>
  | GenericContext<AuthActions.UPDATE_SUCCESS, SignInResponseDto>
  | GenericContext<AuthActions.UPDATE_FAILURE>
  | GenericContext<AuthActions.LOGOUT>;
