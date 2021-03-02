/* eslint-disable prefer-const */
import React, { createContext, useReducer } from 'react';

import { getUserLocalStorage } from '../../shared/helpers/local-storage-helper';
import { PROVIDER_MESSAGES } from '../../shared/helpers/message-helper';

import { AuthActions } from './authActions';
import { AuthenticationDispatch, authReducer } from './authReducer';
import { AuthState, AUTH_INITIAL_STATE } from './authState';

const AuthenticationStateContext = createContext<AuthState>({} as AuthState);
const AuthenticationDispatchContext = createContext<AuthenticationDispatch>(
  {} as AuthenticationDispatch,
);

type AuthenticationProps = { children: React.ReactNode };

function AuthenticationProvider({ children }: AuthenticationProps) {
  const response = getUserLocalStorage();

  let initial = AUTH_INITIAL_STATE;

  if (response) {
    initial = { user: response };
  }

  const [state, dispatch] = useReducer(authReducer, initial);

  return (
    <AuthenticationStateContext.Provider value={state}>
      <AuthenticationDispatchContext.Provider value={dispatch}>
        {children}
      </AuthenticationDispatchContext.Provider>
    </AuthenticationStateContext.Provider>
  );
}

function useAuthenticationContext() {
  const state = React.useContext(AuthenticationStateContext);

  if (!state) {
    throw new Error(PROVIDER_MESSAGES.authStateFail);
  }

  const dispatch = React.useContext(AuthenticationDispatchContext);

  if (!dispatch) {
    throw new Error(PROVIDER_MESSAGES.authContextFail);
  }

  const actions = AuthActions;

  return { state, dispatch, actions };
}

export { AuthenticationProvider, useAuthenticationContext };
