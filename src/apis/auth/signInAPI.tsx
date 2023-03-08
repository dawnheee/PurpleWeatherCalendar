import { instance } from '../instance';
import { User } from '../../types';

export async function signInAPI(userLogin: User) {
  const res = await instance.post(`/users/login`, userLogin);
  if (res?.status === 200) {
    localStorage.setItem('token', res.data.token);
  }
}
