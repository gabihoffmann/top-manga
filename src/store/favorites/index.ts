import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface FavoriteStore {
  favorites: number[];
  favoriteManga: (id: number) => void;
}

export const useFavoriteMangaStore = create<FavoriteStore>()(
  devtools(
    persist(
      (set, get) => ({
        favorites: [],
        favoriteManga: (id) => {
          const shouldFavorite = !get().favorites.includes(id);

          if (shouldFavorite) {
            set((state) => ({
              favorites: [...state.favorites, id],
            }));
          } else {
            set((state) => ({
              favorites: state.favorites.filter((favorite) => favorite !== id),
            }));
          }
        },
      }),
      {
        name: "favorites",
      }
    )
  )
);
