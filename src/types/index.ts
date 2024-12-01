export interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  description: string;
  details: string;
  condition: string;
  tags: string[];
  sizes: string[];
  era: string;
  category: string;
}

export interface Collection {
  id: number;
  name: string;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  selectedSize: string;
  quantity: number;
}

export interface FilterState {
  category: string;
  price: string;
  era: string;
  condition: string;
}