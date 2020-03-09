import { api } from '../helpers/api';

export function fetchTasks() {
  return api.get('http://www.mocky.io/v2/5dc906502f0000830073e8c8');
}

export function foo() { }
