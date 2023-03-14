import { instance } from '../instance';
// import type { TodoId, Todos } from '../../types';

export async function getTodo() {
  const res = instance.get(`/todos`);
  return console.log(res);
}
