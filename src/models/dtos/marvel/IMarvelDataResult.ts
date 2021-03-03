export interface IMarvelDataResult {
  id: number;
  name: string;
  description: string | null;
  variantUri: string;
  thumbnailUri: string;
  favorite: boolean;
}
