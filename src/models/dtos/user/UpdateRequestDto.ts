export interface UpdateRequestDto {
  id?: string;
  name: string;
  email: string;
  password?: string;
  oldPassword?: string;
}
