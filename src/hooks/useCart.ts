import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product } from '@/types';

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, size: string) => void;
  removeItem: (productId: number, size: string) => void;
  updateQuantity: (productId: number, size: string, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, size) => {
        const items = get().items;
        const existingItem = items.find(
          item => item.id === product.id && item.selectedSize === size
        );

        if (existingItem) {
          set({
            items: items.map(item =>
              item.id === product.id && item.selectedSize === size
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({
            items: [...items, { ...product, selectedSize: size, quantity: 1 }],
          });
        }
      },
      removeItem: (productId, size) =>
        set(state => ({
          items: state.items.filter(
            item => !(item.id === productId && item.selectedSize === size)
          ),
        })),
      updateQuantity: (productId, size, quantity) =>
        set(state => ({
          items: state.items.map(item =>
            item.id === productId && item.selectedSize === size
              ? { ...item, quantity }
              : item
          ),
        })),
      clearCart: () => set({ items: [] }),
      total: () =>
        get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    }),
    {
      name: 'cart-storage',
    }
  )
);