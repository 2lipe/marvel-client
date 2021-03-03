import { InfoCard } from '../marvel/Card';

export interface IRequestAddCharacterFavorite {
  characterId: string;
  name: string;
  description: string;
  thumbnailUri: string;
  variantUri: string;
  userId?: string;
}

export class RequestAddCharacterFavorite {
  characterId: string;

  name: string;

  description: string;

  thumbnailUri: string;

  variantUri: string;

  userId?: string | undefined;

  constructor(data: InfoCard) {
    this.characterId = data.id;
    this.name = data.title;
    this.description = data.description ? data.description : ' ';
    this.thumbnailUri = data.imgUrl;
    this.variantUri = data.linkDetail;
  }
}

export interface IResponseAddCharacterFavorite {
  characterId: string;
  name: string;
  description: string;
  thumbnailUri: string;
  variantUri: string;
  userId: string;
  created_at: string;
  updated_at: string;
}
