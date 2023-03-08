import { instance } from 'apis/instance';
import { User } from 'types';

export async function signUpAPI(userLogin: User) {
  const res = await instance.post(`/users/create`, userLogin);
  return console.log(res);
}
