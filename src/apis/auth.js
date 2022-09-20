import {api} from '.';

export const login = data => {
  return api.post('Accounts/login', data);
};
