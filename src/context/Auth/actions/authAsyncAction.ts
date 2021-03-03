import { SignInRequestDto } from '../../../models/dtos/session/SignInRequestDto';
import { SignInResponseDto } from '../../../models/dtos/session/SignInResponseDto';
import { IRequestUpdateProfile } from '../../../models/Interfaces/IRequestUpdateProfile';
import { useAuthService } from '../../../services/auth.service';
import {
  removeUserLocalStorage,
  saveUserLocalStorage,
} from '../../../shared/helpers/local-storage-helper';
import { useAuthenticationContext } from '../reducers/authContext';
import { useUserService } from '../../../services/user.service';

export function AuthAsyncActions() {
  const { dispatch, actions, state } = useAuthenticationContext();
  const { createSession } = useAuthService();
  const { updateUser } = useUserService();

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

  const updateRequestAction = async (data: IRequestUpdateProfile) => {
    try {
      const { token, id } = state.user;
      const response = await updateUser(data);

      const newUser: SignInResponseDto = {
        email: data.email,
        id,
        token,
        userName: data.name,
      };
      removeUserLocalStorage();
      saveUserLocalStorage(newUser);

      dispatch({ type: actions.UPDATE_SUCCESS, payload: newUser });

      return response;
    } catch (error) {
      dispatch({ type: actions.UPDATE_FAILURE });
      throw error;
    }
  };

  return { signInRequestAction, signOutRequestAction, updateRequestAction };
}
