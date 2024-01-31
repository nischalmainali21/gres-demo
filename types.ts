export type LoginFormValues = {
  username: string;
  password: string;
};

export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductsDataType {
  products: ProductType[];
  total: number;
  skip: number;
  limit: number;
}
