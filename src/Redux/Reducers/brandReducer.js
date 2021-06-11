import {
  BRAND_REQUESTED,
  BRAND_SUCCEED,
  BRAND_FAILED,
} from "../Constants/contant";

const initialState = {
  ds_brand: {
    thuong_hieu: [],
    is_loading: true,
    errors: {},
  },
  ct_brand: {
    thuong_hieu: {},
    is_loading: true,
    errors: {},
  },
};
const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    // SANPHAM
    case BRAND_REQUESTED:
      return {
        ...state,
        ds_brand: {
          ...state.ds_brand,
          is_loading: true,
        },
      };
    case BRAND_SUCCEED:
      return {
        ...state,
        ds_brand: {
          ...state.ds_brand,
          thuong_hieu: action.payload.thuong_hieu,
          is_loading: false,
        },
      };
    case BRAND_FAILED:
      return {
        ...state,
        ds_brand: {
          ...state.ds_brand,
          errors: action.payload.errors,
        },
      };
    default:
      return state;
  }
};
export default brandReducer;
