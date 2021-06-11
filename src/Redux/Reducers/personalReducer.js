import {
  PERSONAL_FAILED,
  PERSONAL_REQUESTED,
  PERSONAL_SUCCEED,
} from "../Constants/contant";

const initialState = {
  thong_tin: {
    tt: {},
    is_loading: false,
    errors: {},
  },
};
const personalReducer = (state = initialState, action) => {
  switch (action.type) {
    case PERSONAL_REQUESTED:
      return {
        ...state,
        thong_tin: {
          ...state.thong_tin,
          is_loading: true,
        },
      };
    case PERSONAL_SUCCEED:
      return {
        ...state,
        thong_tin: {
          ...state.thong_tin,
          tt: action.payload.tt,
          is_loading: false,
        },
      };
    case PERSONAL_FAILED:
      return {
        ...state,
        thong_tin: {
          ...state.thong_tin,
          errors: action.payload.errors,
        },
      };
    default:
      return state;
  }
};

export default personalReducer;
