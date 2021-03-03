import { IMarvelDataResult } from './IMarvelDataResult';

export type typeCard = 'Comic' | 'Character';

export interface InfoCard {
  id: string;
  description?: string | null;
  imgUrl: string;
  title: string;
  linkDetail: string;
}

export class CardModel {
  id: string;

  type: typeCard;

  imgUrl: string;

  isFavorite: boolean;

  description: string | null;

  title: string;

  linkDetail: string;

  constructor(type: typeCard, data: IMarvelDataResult) {
    this.id = data.id.toString();
    this.type = type;
    this.imgUrl = data.thumbnailUri;
    this.isFavorite = data.favorite;
    this.title = data.name;
    this.description = data.description;
    this.linkDetail = data.variantUri;
  }
}
