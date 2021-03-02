import { SignInRequestDto } from '../../../models/dtos/session/SignInRequestDto';
import { useAuthService } from '../../../services/auth.service';
import {
  removeUserLocalStorage,
  saveUserLocalStorage,
} from '../../../shared/helpers/local-storage-helper';
import { useAuthenticationContext } from '../reducers/authContext';

export function AuthAsyncActions() {
  const { dispatch, actions } = useAuthenticationContext();
  const { createSession } = useAuthService();

  const signInRequestAction = async (data: SignInRequestDto) => {
    try {
      const response = await createSession(data);

      saveUserLocalStorage(response.data);

      dispatch({ type: actions.LOGIN_SUCCESS, payload: response.data });

      return response;
    } catch (error) {
      dispatch({ type: actions.LOGIN_FAILURE });

      throw error;
    }
  };

  const signOutRequestAction = async () => {
    removeUserLocalStorage();

    dispatch({ type: actions.LOGOUT });
  };

  return { signInRequestAction, signOutRequestAction };
}
