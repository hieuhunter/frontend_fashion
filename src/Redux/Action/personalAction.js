import {
  PERSONAL_FAILED,
  PERSONAL_REQUESTED,
  PERSONAL_SUCCEED,
} from "../Constants/contant";

export const personalRequestedAction = () => ({
  type: PERSONAL_REQUESTED,
});
export const personalSucceedAction = (tt) => ({
  type: PERSONAL_SUCCEED,
  payload: {
    tt: tt,
  },
});
export const personalFailedAction = (errors) => ({
  type: PERSONAL_FAILED,
  payload: {
    errors: errors,
  },
});
