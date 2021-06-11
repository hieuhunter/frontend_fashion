import { combineReducers } from "redux";
import authReducer from "./authReducer";
import billReducer from "./billReducer";
import brandReducer from "./brandReducer";
import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer";
import personalReducer from "./personalReducer";
import sanphamReducer from "./sanphamReducer";
import sp_brandReducer from "./sp_brandReducer";
import sp_categoryReducer from "./sp_categoryReducer";

const rootReducer = combineReducers({
  san_pham: sanphamReducer,
  danh_muc: categoryReducer,
  ds_category: sp_categoryReducer,
  thuong_hieu: brandReducer,
  ds_brand: sp_brandReducer,
  auth: authReducer,
  thong_tin: personalReducer,
  gio_hang: cartReducer,
  hoa_don: billReducer,
});
export default rootReducer;
