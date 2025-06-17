import { create } from "zustand";

export type ModalType = 'auth' | 'reg' | 'success' | 'thank' | 'idle' | 'subscribe';

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