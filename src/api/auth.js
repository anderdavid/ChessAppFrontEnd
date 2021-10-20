import api from './api';

export const auth = (params) => {
  return api.get('', { params });
};
