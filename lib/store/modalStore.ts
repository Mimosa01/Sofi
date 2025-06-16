import { create } from "zustand";

type ModalType = 'auth' | 'reg' | 'success' | 'thank' | 'idle';

type ModalStoreType = {
  isShow: boolean;
  type: ModalType;
  toggleShow: () => void;
  setType: (value: ModalType) => void;
}

const useStore = create<ModalStoreType>((set) => ({
  isShow: false,
  type: 'idle',
  toggleShow: () => set((state) => ({ isShow: !state.isShow })),
  setType: (value: ModalType) => set(() => ({ type: value })) 
}))

export default useStore;