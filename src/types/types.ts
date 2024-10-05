export type Product = {
  name: string;
  description: string;
  brand: string;
  price: number;
  discount: number;
  inStock: boolean;
  images: string[];
  thumbnails: string[];
};

export type Cart = { amount: number; product: Product | null };
