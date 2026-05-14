'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { cartAPI } from '@/utils/api';

interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  loading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  // Load cart from API on mount
  useEffect(() => {
    loadCart();
  }, []);

  // Calculate total whenever items change
  useEffect(() => {
    const newTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, [items]);

  const loadCart = async () => {
    try {
      setLoading(true);
      const response = await cartAPI.getCart();
      if (response.data.success) {
        setItems(response.data.cart.items || []);
      }
    } catch (error) {
      console.error('Error loading cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const addItem = (item: CartItem) => {
    const existing = items.find((i) => i.productId === item.productId);
    if (existing) {
      updateQuantity(item.productId, existing.quantity + item.quantity);
    } else {
      setItems([...items, item]);
    }
  };

  const removeItem = (productId: string) => {
    setItems(items.filter((item) => item.productId !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
    } else {
      setItems(
        items.map((item) =>
          item.productId === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{ items, total, addItem, removeItem, updateQuantity, clearCart, loading }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
