import { ResponseApiMarvelDto } from '../models/dtos/marvel/ResponseApiMarvelDto';
import { IDataResult } from '../models/dtos/user/IUserResult';
import { axiosPostApi } from '../shared/helpers/axios-helper';
import { getUserLocalStorage } from '../shared/helpers/local-storage-helper';

export const useCharactersService = () => {
  const getCharacter = async (value: string) => {
    try {
      const user = getUserLocalStorage();

      const body = {
        userId: user?.id,
        searchParameter: value,
      };

      const response = await axiosPostApi<IDataResult<ResponseApiMarvelDto>>(
        'character',
        body,
      );

      return response;
    } catch (err) {
      throw new Error(err);
    }
  };

  return { getCharacter };
};
