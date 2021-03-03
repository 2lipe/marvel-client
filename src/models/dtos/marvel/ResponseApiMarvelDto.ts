import { IMarvelDataResult } from './IMarvelDataResult';

export interface ResponseApiMarvelDto {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: IMarvelDataResult[];
}
