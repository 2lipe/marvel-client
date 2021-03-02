import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

import { SignInRequestDto } from '../../models/dtos/SignInRequestDto';
import { SignInResponseDto } from '../../models/dtos/SingInResponseDto';
import { IUser } from '../../models/interfaces/IUser';

import { PROVIDER_MESSAGES } from '../../shared/helpers/message-helper';
import { api } from '../../shared/helpers/api-helper';

type AuthContextProps = {
  user: IUser;
  signIn(credentials: SignInRequestDto): Promise<void>;
  signOut(): void;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const getLocalStorageTokenAndUser = () => {
    const token = localStorage.getItem('@stone-marvel:token');
    const user = localStorage.getItem('@stone-marvel:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as SignInResponseDto;
  };

  const [data, setData] = useState<SignInResponseDto>(getLocalStorageTokenAndUser);

  const signIn = useCallback(async ({ email, password }: SignInRequestDto) => {
    const body = {
      email,
      password,
    };

    try {
      const response = await api.post<SignInResponseDto>('/user/session', body);

      const { token, user } = response.data;

      localStorage.setItem('@stone-marvel:token', token);
      localStorage.setItem('@stone-marvel:user', JSON.stringify(user));

      setData({ token, user });
    } catch (err) {
      throw new Error(err);
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@stone-marvel:token');
    localStorage.removeItem('@stone-marvel:user');

    setData({} as SignInResponseDto);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(PROVIDER_MESSAGES.noContext);
  }

  return context;
};

export { AuthProvider, useAuth };
