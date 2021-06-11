import {
  BRAND_FAILED,
  BRAND_REQUESTED,
  BRAND_SUCCEED,
} from "../Constants/contant";

export const brandRequestedAction = () => ({
  type: BRAND_REQUESTED,
});
export const brandSucceedAction = (thuong_hieu) => ({
  type: BRAND_SUCCEED,
  payload: {
    thuong_hieu: thuong_hieu,
  },
});
export const brandFailedAction = (errors) => ({
  type: BRAND_FAILED,
  payload: {
    errors: errors,
  },
});
