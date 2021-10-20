import axios from 'axios';

export const token = 'token';

const api = axios.create({
  baseURL: `http://localhost:8000`,
  timeout: 3000
});

async function getTokenFromLocalStorage() {
  return window.localStorage.getItem(token);
}

api.interceptors.request.use(
  async (config) => {
    // Do something before request is sent
    try {
      const access_token = await getTokenFromLocalStorage();

      if (access_token) {
        config.headers['Authorization'] = `Bearer ${access_token}`;
      }
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
