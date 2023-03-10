import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const loginState = atom<object>({
  key: 'loginState',
  default: {
    isLogin: false,
    userName: '',
  },
  effects_UNSTABLE: [persistAtom],
});