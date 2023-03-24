import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const isLoginAtom = atom<boolean>({
  key: 'isLoginAtom',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const selectedDateAtom = atom<any>({
  key: 'selectedDateAtom',
  default: { start: '' },
  effects_UNSTABLE: [persistAtom],
});

export const modalAtom = atom<boolean>({
  key: 'isOpen',
  default: false,
});

export const isLoadingAtom = atom<boolean>({
  key: 'isLoading',
  default: false,
});
