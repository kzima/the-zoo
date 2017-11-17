import { combineReducers } from "redux";

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";

export const loginSuccessAction = payload => ({
  type: USER_LOGIN_SUCCESS,
  payload
});

const user = (state = null, action) => {
  const { type } = action;

  if (type === USER_LOGIN_SUCCESS) {
    const { displayName, email, isAnonymous, photoURL } = action.payload;
    return { displayName, email, isAnonymous, photoURL };
  }

  return state;
};

export default combineReducers({
  user
});
