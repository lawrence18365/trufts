import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FilterState {
  category: string;
  price: string;
  era: string;
  condition: string;
  searchQuery: string;
}

interface FiltersStore extends FilterState {
  setFilter: (key: keyof FilterState, value: string) => void;
  resetFilters: () => void;
}

const initialState: FilterState = {
  category: 'all',
  price: 'all',
  era: 'all',
  condition: 'all',
  searchQuery: '',
};

export const useFilters = create<FiltersStore>()(
  persist(
    (set) => ({
      ...initialState,
      setFilter: (key, value) => set((state) => ({ ...state, [key]: value })),
      resetFilters: () => set(initialState),
    }),
    {
      name: 'filters-storage',
    }
  )
);