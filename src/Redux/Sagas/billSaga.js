import axios from 'axios';
import { billFailedAction, billSucceedAction } from '../Action/billAction';
import { BILL_REQUESTED } from '../Constants/contant';
import { call, put, takeLatest } from 'redux-saga/effects';

async function apiBill() {
	const { data } = await axios({
		method: 'POST',
		url: `http://127.0.0.1:8000/api/pay`,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + window.localStorage.getItem('token')
		}
	});
	return data;
}

function* Bill() {
	try {
		const res = yield call(apiBill);
		if (res.success) {
			yield put(billSucceedAction(res.data));
			window.location.replace('/');
		}
	} catch (err) {
		yield put(billFailedAction(err.message));
	}
}

export function* BillWatcher() {
	yield takeLatest(BILL_REQUESTED, Bill);
}