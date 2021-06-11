import { all } from "redux-saga/effects";
import {
  authLoginWatcher,
  authRegisterWatcher,
  auth_checkLoginWatcher,
  logoutUserWatcher,
} from "./authSaga";
import { BillWatcher } from "./billSaga";
import { dsBrandWatcher } from "./brandSaga";
import {
  addCartWatcher,
  CartWatcher,
  deleteallCartWatcher,
  xoaCartWatcher,
} from "./cartSaga";
import { dsCategoryWatcher } from "./categorySaga";
import { ctProductWatcher } from "./ctProductSaga";
import { PersonalWatcher } from "./personalSaga";
import { dsProductWatcher } from "./sanphamSaga";
import { sp_BrandWatcher } from "./sp_brandSaga";
import { sp_CategoryWatcher } from "./sp_categorySaga";

function* rootSaga() {
  yield all([
    dsProductWatcher(),
    ctProductWatcher(),
    dsCategoryWatcher(),
    sp_CategoryWatcher(),
    dsBrandWatcher(),
    sp_BrandWatcher(),
    authRegisterWatcher(),
    authLoginWatcher(),
    auth_checkLoginWatcher(),
    PersonalWatcher(),
    addCartWatcher(),
    CartWatcher(),
    xoaCartWatcher(),
    deleteallCartWatcher(),
    logoutUserWatcher(),
    BillWatcher(),
  ]);
}
export default rootSaga;
