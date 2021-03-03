import { SignUpRequestDto } from '../models/dtos/user/SignUpRequestDto';
import { SignUpResponseDto } from '../models/dtos/user/SingUpResponseDto';
import { IDataResult } from '../models/dtos/user/IUserResult';
import { axiosGetApi, axiosPostApi } from '../shared/helpers/axios-helper';
import { getUserLocalStorage } from '../shared/helpers/local-storage-helper';
import { IResponseComicFavorite } from '../models/dtos/comic/FavoriteComic';
import { IResponseCharacterFavorite } from '../models/dtos/character/FavoriteCharacter';
import {
  IRequestAddComicFavorite,
  IResponseAddComicFavorite,
} from '../models/dtos/comic/AddFavoriteComic';
import {
  IRequestAddCharacterFavorite,
  IResponseAddCharacterFavorite,
} from '../models/dtos/character/AddFavoriteCharacter';
import { UpdateRequestDto } from '../models/dtos/user/UpdateRequestDto';
import { SignInResponseDto } from '../models/dtos/session/SignInResponseDto';

export const useUserService = () => {
  const createAccount = async ({ name, email, password }: SignUpRequestDto) => {
    const body = {
      name,
      email,
      password,
    };

    try {
      const response = await axiosPostApi<IDataResult<SignUpResponseDto>>(
        '/user/create',
        body,
      );

      return response;
    } catch (err) {
      throw new Error(err);
    }
  };

  const updateUser = async (data: UpdateRequestDto) => {
    const user = getUserLocalStorage();

    const userId = user?.id;

    const body: UpdateRequestDto = {
      ...data,
      id: userId,
    };

    const response = await axiosPostApi<IDataResult<SignInResponseDto>>(
      'user/update',
      body,
    );
    return response;
  };

  const getComicsFavorites = async () => {
    try {
      const user = getUserLocalStorage();

      const userId = user?.id;
      const url = `user/comic/${userId}/favorite-comic`;

      const response = await axiosGetApi<IDataResult<IResponseComicFavorite[]>>(url);

      return response;
    } catch (err) {
      throw new Error(err);
    }
  };

  const getCharactersFavorites = async () => {
    try {
      const user = getUserLocalStorage();

      const userId = user?.id;
      const url = `user/character/${userId}/favorite-character`;

      const response = await axiosGetApi<IDataResult<IResponseCharacterFavorite[]>>(url);

      return response;
    } catch (err) {
      throw new Error(err);
    }
  };

  const addComicFavorite = async (data: IRequestAddComicFavorite) => {
    try {
      const body: IRequestAddComicFavorite = data;

      const user = getUserLocalStorage();

      body.userId = user?.id;

      const response = await axiosPostApi<IDataResult<IResponseAddComicFavorite>>(
        'user/comic/add-favorite-comic',
        body,
      );

      return response;
    } catch (err) {
      throw new Error(err);
    }
  };

  const removeComicFavorite = async (comicId: string) => {
    try {
      const user = getUserLocalStorage();

      const body = {
        comicId,
        userId: user?.id,
      };

      const response = await axiosPostApi<IDataResult<{}>>(
        'user/comic/remove-favorite-comic',
        body,
      );

      return response;
    } catch (err) {
      throw new Error(err);
    }
  };

  const addCharacterFavorite = async (data: IRequestAddCharacterFavorite) => {
    try {
      const body: IRequestAddCharacterFavorite = data;

      const user = getUserLocalStorage();

      body.userId = user?.id;

      const response = await axiosPostApi<IDataResult<IResponseAddCharacterFavorite>>(
        'user/character/add-favorite-character',
        body,
      );

      return response;
    } catch (err) {
      throw new Error(err);
    }
  };

  const removeCharacterFavorite = async (characterId: string) => {
    try {
      const user = getUserLocalStorage();

      const body = {
        characterId,
        userId: user?.id,
      };

      const response = await axiosPostApi<IDataResult<{}>>(
        'user/character/remove-favorite-character',
        body,
      );

      return response;
    } catch (err) {
      throw new Error(err);
    }
  };

  return {
    createAccount,
    updateUser,
    getComicsFavorites,
    getCharactersFavorites,
    addComicFavorite,
    removeComicFavorite,
    addCharacterFavorite,
    removeCharacterFavorite,
  };
};
