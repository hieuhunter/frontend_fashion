import {
  ADDCART_FAILED,
  ADDCART_REQUESTED,
  ADDCART_SUCCEED,
  CART_FAILED,
  CART_REQUESTED,
  CART_SUCCEED,
  DELETEALLCART_FAILED,
  DELETEALLCART_REQUESTED,
  DELETEALLCART_SUCCEED,
  DELETECART_FAILED,
  DELETECART_REQUESTED,
  DELETECART_SUCCEED,
} from "../Constants/contant";

export const cartRequestedAction = () => ({
  type: CART_REQUESTED,
});
export const cartSucceedAction = (gio_hang) => ({
  type: CART_SUCCEED,
  payload: {
    gio_hang: gio_hang,
  },
});
export const cartFailedAction = (errors) => ({
  type: CART_FAILED,
  payload: {
    errors: errors,
  },
});
// THEM CART
export const addcartRequestedAction = (gio_hang) => ({
  type: ADDCART_REQUESTED,
  payload: {
    gio_hang: gio_hang,
  },
});
export const addcartSucceedAction = (gio_hang) => ({
  type: ADDCART_SUCCEED,
  payload: {
    gio_hang: gio_hang,
  },
});
export const addcartFailedAction = (errors) => ({
  type: ADDCART_FAILED,
  payload: {
    errors: errors,
  },
});
// XOA CART
export const deletecartRquestedAction = (gio_hang) => ({
  type: DELETECART_REQUESTED,
  payload: {
    gio_hang: gio_hang,
  },
});
export const deletecartSucceedAction = (gio_hang) => ({
  type: DELETECART_SUCCEED,
  payload: {
    gio_hang: gio_hang,
  },
});
export const deletecartFailedAction = (errors) => ({
  type: DELETECART_FAILED,
  payload: {
    errors: errors,
  },
});
// XOA TAT CA GH
export const deletecartallRequestedAction = (gio_hang) => ({
  type: DELETEALLCART_REQUESTED,
  payload: {
    gio_hang: gio_hang,
  },
});
export const deletecartallSucceedAction = (gio_hang) => ({
  type: DELETEALLCART_SUCCEED,
  payload: {
    gio_hang: gio_hang,
  },
});
export const deletecartallFailedAction = (errors) => ({
  type: DELETEALLCART_FAILED,
  payload: {
    errors: errors,
  },
});
