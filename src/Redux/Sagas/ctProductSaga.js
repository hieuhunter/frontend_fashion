import { call, put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import {
  ctproductFailedAction,
  ctproductSucceedAction,
} from "../Action/productAction";
import { CTSANPHAM_REQUESTED } from "../Constants/contant";

async function apictProduct(id) {
  const { data } = await axios({
    method: "GET",
    url: `http://127.0.0.1:8000/api/product/${id}`,
  });
  return data;
}
function* ct_Product(action) {
  try {
    const { id } = action.payload;
    const res = yield call(apictProduct, id);
    console.log(res);
    if (res.success) {
      yield put(ctproductSucceedAction(res.data));
    }
  } catch (err) {
    yield put(ctproductFailedAction(err.message));
  }
}
export function* ctProductWatcher() {
  yield takeLatest(CTSANPHAM_REQUESTED, ct_Product);
}
