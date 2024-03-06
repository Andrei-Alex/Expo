export interface IApiItemForSale {
  id: string;
  title: string;
  price: number;
  images: {
    url: string;
    thumbnailUrl: string;
  }[];
}
