import { create } from 'zustand'

type SelectedScepType = {
  selectedSpec: string;
  setSpec: (value: string) => void;
  clearSpec: () => void;
}

const useStore = create<SelectedScepType>((set) => ({
  selectedSpec: 'Специализация',
  setSpec: (value: string) => set(() => ({ selectedSpec: value })),
  clearSpec: () => set(() => ({ selectedSpec: 'Специализация' }))
}))

export default useStore;