import {
  SANPHAM_REQUESTED,
  SANPHAM_SUCCEED,
  SANPHAM_FAILED,
  CTSANPHAM_REQUESTED,
  CTSANPHAM_SUCCEED,
  CTSANPHAM_FAILED,
} from "../Constants/contant";
export const productRequestedAction = () => ({
  type: SANPHAM_REQUESTED,
});
export const productSucceedAction = (san_pham) => ({
  type: SANPHAM_SUCCEED,
  payload: {
    san_pham: san_pham,
  },
});
export const productFailedAction = (errors) => ({
  type: SANPHAM_FAILED,
  payload: {
    errors: errors,
  },
});
// chi tiet san pham
export const ctproductRequestedAction = (id) => ({
  type: CTSANPHAM_REQUESTED,
  payload: {
    id: id,
  },
});
export const ctproductSucceedAction = (san_pham) => ({
  type: CTSANPHAM_SUCCEED,
  payload: {
    san_pham: san_pham,
  },
});
export const ctproductFailedAction = (error) => ({
  type: CTSANPHAM_FAILED,
  payload: {
    error: error,
  },
});
