import { BILL_FAILED, BILL_REQUESTED, BILL_RESETED, BILL_SUCCEED } from '../Constants/contant';

export const billRequestedAction = () => ({
	type: BILL_REQUESTED
});
export const billSucceedAction = (hoa_don) => ({
	type: BILL_SUCCEED,
	payload: {
		hoa_don: hoa_don
	}
});
export const billFailedAction = (errors) => ({
	type: BILL_FAILED,
	payload: {
		errors: errors
	}
});
export const billResetedAction = () => ({
	type: BILL_RESETED
});
