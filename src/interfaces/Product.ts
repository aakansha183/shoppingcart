export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    quantity?: number;
  }
 export interface ProductCardProps {
    product: Product;
    isInCart: boolean;
    handleAddToCart: (product: Product) => void;
    handleRemoveFromCart: (product: Product) => void;
  }