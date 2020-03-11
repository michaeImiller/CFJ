import { api } from '../helpers/api';

export function fetchMe() {
  return api.get('http://www.mocky.io/v2/5dc4c2dd32000080007694c1');
}

export function login() {
  return api.post('http://demo9847903.mockable.io/sign-in');
}
