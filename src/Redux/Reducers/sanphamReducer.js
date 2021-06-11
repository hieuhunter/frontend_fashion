import {
  CTSANPHAM_FAILED,
  CTSANPHAM_REQUESTED,
  CTSANPHAM_SUCCEED,
  SANPHAM_FAILED,
  SANPHAM_REQUESTED,
  SANPHAM_SUCCEED,
} from "../Constants/contant";

const initialState = {
  ds_san_pham: {
    san_pham: [],
    is_loading: true,
    errors: {},
  },
  ct_san_pham: {
    san_pham: {},
    is_loading: true,
    errors: {},
  },
};
const sanphamReducer = (state = initialState, action) => {
  switch (action.type) {
    // SANPHAM
    case SANPHAM_REQUESTED:
      return {
        ...state,
        ds_san_pham: {
          ...state.ds_san_pham,
          is_loading: true,
        },
      };
    case SANPHAM_SUCCEED:
      return {
        ...state,
        ds_san_pham: {
          ...state.ds_san_pham,
          san_pham: action.payload.san_pham,
          is_loading: false,
        },
      };
    case SANPHAM_FAILED:
      return {
        ...state,
        ds_san_pham: {
          ...state.ds_san_pham,
          errors: action.payload.errors,
        },
      };
    // CTPRODUCT
    case CTSANPHAM_REQUESTED:
      return {
        ...state,
        ct_san_pham: {
          ...state.ct_san_pham,
          is_loading: true,
        },
      };
    case CTSANPHAM_SUCCEED:
      return {
        ...state,
        ct_san_pham: {
          ...state.ct_san_pham,
          san_pham: action.payload.san_pham,
          is_loading: false,
        },
      };
    case CTSANPHAM_FAILED:
      return {
        ...state,
        ct_san_pham: {
          ...state.ct_san_pham,
          errors: action.payload.errors,
        },
      };
    default:
      return state;
  }
};
export default sanphamReducer;
