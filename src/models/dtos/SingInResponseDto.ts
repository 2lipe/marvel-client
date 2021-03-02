import { IUser } from '../interfaces/IUser';

export interface SignInResponseDto {
  token: string;
  user: IUser;
}
