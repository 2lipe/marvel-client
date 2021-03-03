import { ResponseApiMarvelDto } from '../models/dtos/marvel/ResponseApiMarvelDto';
import { IDataResult } from '../models/dtos/user/IUserResult';
import { axiosPostApi } from '../shared/helpers/axios-helper';
import { getUserLocalStorage } from '../shared/helpers/local-storage-helper';

export const useComicsService = () => {
  const getComics = async (value: string) => {
    try {
      const user = getUserLocalStorage();

      const body = {
        userId: user?.id,
        searchParameter: value,
      };

      const response = await axiosPostApi<IDataResult<ResponseApiMarvelDto>>(
        'comic',
        body,
      );

      return response;
    } catch (err) {
      throw new Error(err);
    }
  };

  const getCharactersOfComic = async (comicId: String) => {
    try {
      const user = getUserLocalStorage();

      const body = {
        userId: user?.id,
      };

      const url = `comic/${comicId}/characters`;

      const response = await axiosPostApi<IDataResult<ResponseApiMarvelDto>>(url, body);

      return response;
    } catch (err) {
      throw new Error(err);
    }
  };

  return { getComics, getCharactersOfComic };
};
