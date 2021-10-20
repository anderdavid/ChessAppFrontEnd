import axios from 'axios';
/* import { API_URL } from '../utils/constants';
import { getLocalStorage } from '../utils/helpers'; */

const api = axios.create({
  baseURL: `http://localhost:8000`,
  timeout: 3000
});

api.interceptors.request.use(
  async (config) => {
    // Do something before request is sent
    try {
      /*  let session = await getLocalStorage('session');

      if (session) {
        session = JSON.parse(session);
        config.headers['Authorization'] = `Bearer ${session.token}`;
      } */
      return config;
    } catch (error) {
      return error;
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  function (error) {
    return Promise.reject(error.response);
  }
);

export default api;
