import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import {Product} from '../interfaces/Product'
import localforage from '../utils/localForage';

type CartContextType = {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (product: Product) => void;
  clearCart: () => void;
};

type CartProviderProps = {
  children: ReactNode;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const loadCart = async () => {
      const cart = await localforage.getItem<Product[]>('cart');
      if (cart) {
        setItems(cart);
      }
    };

    loadCart();
  }, []);

  useEffect(() => {
    localforage.setItem('cart', items);
  }, [items]);

  const addItem = (product: Product) => {
    setItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
  
      if (existingItemIndex !== -1) {
        return prevItems;
      } else {
        return [...prevItems, { ...product}];
      }
    });
  };

  const removeItem = (product: Product) => {
    setItems(prevItems => prevItems.filter(item => item.id !== product.id));
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCartContext };
