import { InfoCard } from '../marvel/Card';

export interface IRequestAddComicFavorite {
  comicId: string;
  title: string;
  description: string;
  thumbnailUri: string;
  variantUri: string;
  userId?: string;
}

export class RequestAddComicFavorite {
  comicId: string;

  title: string;

  description: string;

  thumbnailUri: string;

  variantUri: string;

  userId?: string | undefined;

  constructor(data: InfoCard) {
    this.comicId = data.id;
    this.title = data.title;
    this.description = data.description ? data.description : ' ';
    this.thumbnailUri = data.imgUrl;
    this.variantUri = data.linkDetail;
  }
}

export interface IResponseAddComicFavorite {
  comicId: string;
  title: string;
  description: string;
  thumbnailUri: string;
  variantUri: string;
  userId: string;
  created_at: string;
  updated_at: string;
}
