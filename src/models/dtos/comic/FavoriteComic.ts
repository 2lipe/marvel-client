export interface IResponseComicFavorite {
  comicId: string;
  title: string;
  description: string;
  thumbnailUri: string;
  variantUri: string;
  userId: string;
  id: string;
}

export class CardComicFavorite {
  id: string;

  type: 'Comic' | 'Character';

  imgUrl: string;

  isFavorite: boolean;

  description: string | null;

  title: string;

  linkDetail: string;

  constructor(type: 'Comic' | 'Character', data: IResponseComicFavorite) {
    this.id = data.comicId;
    this.type = type;
    this.imgUrl = data.thumbnailUri;
    this.isFavorite = true;
    this.title = data.title;
    this.description = data.description;
    this.linkDetail = data.variantUri;
  }
}
