import axios from "axios";
import { call, put, takeLatest } from "@redux-saga/core/effects";
import {
  personalFailedAction,
  personalSucceedAction,
} from "../Action/personalAction";
import { PERSONAL_REQUESTED } from "../Constants/contant";

async function apiPersonal(user) {
  const { data } = await axios({
    method: "GET",
    url: "http://127.0.0.1:8000/api/personal",
    url: `${process.env.REACT_APP_API_URL}/personal`,
    data: user,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + window.localStorage.getItem("token"),
    },
  });
  return data;
}

function* Personal() {
  try {
    const res = yield call(apiPersonal);
    if (res.success) {
      yield put(personalSucceedAction(res.data));
    }
  } catch (err) {
    yield put(personalFailedAction(err.message));
  }
}

export function* PersonalWatcher() {
  yield takeLatest(PERSONAL_REQUESTED, Personal);
}
