import { call, put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import {
  categoryFailedAction,
  categorySucceedAction,
} from "../Action/danhmucAction";
import { CATEGORY_REQUESTED } from "../Constants/contant";

async function apiCategory() {
  const { data } = await axios({
    method: "GET",
    url: "http://127.0.0.1:8000/api/category",
  });
  return data;
}
function* dsCategory() {
  try {
    const res = yield call(apiCategory);
    console.log(res);
    if (res.success) {
      yield put(categorySucceedAction(res.data));
    }
  } catch (err) {
    yield put(categoryFailedAction(err.message));
  }
}
export function* dsCategoryWatcher() {
  yield takeLatest(CATEGORY_REQUESTED, dsCategory);
}
