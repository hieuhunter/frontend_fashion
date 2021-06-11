import {
  CATEGORY_FAILED,
  CATEGORY_REQUESTED,
  CATEGORY_SUCCEED,
} from "../Constants/contant";

export const categoryRequestedAction = () => ({
  type: CATEGORY_REQUESTED,
});
export const categorySucceedAction = (danh_muc) => ({
  type: CATEGORY_SUCCEED,
  payload: {
    danh_muc: danh_muc,
  },
});
export const categoryFailedAction = (errors) => ({
  type: CATEGORY_FAILED,
  payload: {
    errors: errors,
  },
});
