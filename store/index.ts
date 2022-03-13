import create from "zustand";

interface IStore {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}

export const useStore = create<IStore>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
