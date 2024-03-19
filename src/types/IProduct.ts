export interface IProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  isFavorite: boolean;
  category?: string;
}
