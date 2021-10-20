import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from './authActions';
import { CONSTANTS } from '../consts';
const initialState = {
  status: 'NOT_LOADED',
  payload: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return { ...state, status: CONSTANTS.loading };

    case AUTH_FAILURE:
      return { ...state, status: CONSTANTS.not_loaded };

    case AUTH_SUCCESS:
      return {
        ...state,
        status: CONSTANTS.loaded,
        payload: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
