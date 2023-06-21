export interface IProduct {
  _id: string;
  title: string;
  description: string;
  slug: string;
  category: {
    _id: string;
    title: string;
    englishTitle: string;
  };
  imageLink: string;
  price: number;
  offPrice: number;
  discount: number;
  brand: string;
  tags: string[];
  rating: number;
  numReviews: number;
  countInStock: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  likesCount: number;
  isLiked: boolean;
}
