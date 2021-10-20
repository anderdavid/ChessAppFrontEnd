import { auth } from '../../api/auth';
import { token } from '../../api/api';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const getAuthRequest = (params) => {
  return (dispatch) => {
    dispatch({ type: AUTH_REQUEST });
    auth(params)
      .then((response) => {
        window.localStorage.setItem(token, response.token);
        dispatch({ type: AUTH_SUCCESS, payload: response });
      })
      .catch((error) => dispatch({ type: AUTH_FAILURE }));
  };
};
