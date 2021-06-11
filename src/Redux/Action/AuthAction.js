import {
  CHECK_LOGIN,
  LOGIN_FAILED,
  LOGIN_REQUESTED,
  LOGIN_SUCCEED,
  LOGOUT_FAILED,
  LOGOUT_REQUESTED,
  LOGOUT_SUCCEED,
  REGISTER_FAILED,
  REGISTER_REQUESTED,
  REGISTER_SUCCEED,
} from "../Constants/contant";

export const registerRequestedAction = (user) => ({
  type: REGISTER_REQUESTED,
  payload: {
    user: user,
  },
});
export const registerSucceedAction = (user) => ({
  type: REGISTER_SUCCEED,
  payload: {
    user: user,
  },
});
export const registerFailedAction = (errors) => ({
  type: REGISTER_FAILED,
  payload: {
    errors: errors,
  },
});

// Login
export const loginRequestedAction = (user) => ({
  type: LOGIN_REQUESTED,
  payload: {
    user: user,
  },
});
export const loginSucceedAction = (user, is_authenticated) => ({
  type: LOGIN_SUCCEED,
  payload: {
    user: user,
    is_authenticated: is_authenticated,
  },
});
export const loginFailedAction = (errors) => ({
  type: LOGIN_FAILED,
  payload: {
    errors: errors,
  },
});
export const checkloginAction = () => ({
  type: CHECK_LOGIN,
});

// logout
export const logoutRequestedAction = (router) => ({
  type: LOGOUT_REQUESTED,
  payload: {
    router: router,
  },
});
export const logoutSucceedAction = () => ({
  type: LOGOUT_SUCCEED,
});
export const logoutFailedAction = (errors) => ({
  type: LOGOUT_FAILED,
  payload: {
    errors: errors,
  },
});
