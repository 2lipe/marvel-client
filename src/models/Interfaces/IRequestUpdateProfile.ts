export interface IRequestUpdateProfile {
  id?: string;
  name: string;
  email: string;
  password?: string;
  oldPassword?: string;
}
