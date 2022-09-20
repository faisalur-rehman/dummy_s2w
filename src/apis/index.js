import axios from 'axios';
import Storage from '../utils/Storage';

export const STAGE_URL = 'https://stage01.sensights.ai:8080/api/';
// export const PROD_URL = 'https://ledgerbook-production.herokuapp.com/';

export const FILE_URL = 'https://lb-file-upload-service.herokuapp.com/';

export const api = axios.create({
  baseURL: STAGE_URL,
});

export const fileApi = axios.create({
  baseURL: FILE_URL,
});

api.interceptors.request.use(
  async config => {
    const token = await Storage.retrieveData('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
