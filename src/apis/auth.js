import {api} from '.';

export const login = data => {
  return api.post('Accounts/login', data);
};

export const getProfile = async () => {
  return api.get('Accounts/Profile/Profile');
};
export const updateProfile = data => {
  // console.log("data at auth update",data)
  return api.put("Accounts/Profile/Profile",data);
};
