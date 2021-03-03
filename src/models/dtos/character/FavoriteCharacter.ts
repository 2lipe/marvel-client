export interface IResponseCharacterFavorite {
  characterId: string;
  name: string;
  description: string;
  thumbnailUri: string;
  variantUri: string;
  userId: string;
  id: string;
}

export class CardCharacterFavorite {
  id: string;

  type: 'Comic' | 'Character';

  imgUrl: string;

  isFavorite: boolean;

  description: string | null;

  title: string;

  linkDetail: string;

  constructor(type: 'Comic' | 'Character', data: IResponseCharacterFavorite) {
    this.id = data.characterId;
    this.type = type;
    this.imgUrl = data.thumbnailUri;
    this.isFavorite = true;
    this.title = data.name;
    this.description = data.description;
    this.linkDetail = data.variantUri;
  }
}
