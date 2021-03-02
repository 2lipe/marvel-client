import { AuthActions, AuthenticationAction } from './authActions';
import { AuthState } from './authState';
import { SignInResponseDto } from '../../models/dtos/user/SingInResponseDto';
import { CONTEXT_MESSAGES } from '../../shared/helpers/message-helper';

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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      throw new Error(`${CONTEXT_MESSAGES.actionNotIdentified}${action!.type}`);
    }
  }
}
