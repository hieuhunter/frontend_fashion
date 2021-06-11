import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cartRequestedAction,
  deletecartRquestedAction,
  deletecartallRequestedAction,
  addcartRequestedAction,
} from "../../Redux/Action/cartAction";
import { productRequestedAction } from "../../Redux/Action/productAction";
import Layout from "../Layout";

const total_price = function (arr, qty, price) {
  return arr.reduce(function (a, b) {
    return a + b[qty] * b.product[price];
  }, 0);
};
const Cart = () => {
  const dispatch = useDispatch();
  const dsCart = useSelector((state) => state.gio_hang.gio_hang);
  let [count, setCount] = useState(0);

  const delete_Cart = (id) => {
    const gio_hang = {
      id_sp: id,
    };
    dispatch(deletecartRquestedAction(gio_hang));
    dispatch(cartRequestedAction());
  };
  const addToCart = (id, gia, count) => {
    const gio_hang = {
      id_sp: id,
      so_luong: count,
      gia: gia,
    };
    dispatch(addcartRequestedAction(gio_hang));
    dispatch(cartRequestedAction());
  };
  const incrementCount = () => {
    count = count + 1;
    setCount(count);
  };
  const decrementCount = () => {
    count = count - 1;
    setCount(count);
  };
  const delete_ALLCart = (id) => {
    const gio_hang = {
      id_kh: id,
    };
    dispatch(deletecartallRequestedAction(gio_hang));
    dispatch(cartRequestedAction());
  };

  useEffect(() => {
    dispatch(productRequestedAction());
    dispatch(cartRequestedAction());
  }, [dispatch]);
  return (
    <Layout>
      <div>
        <div className="banner-top">
          <div className="container">
            <h1>Checkout</h1>
            <em />
            <h2>
              <a href="index.html">Home</a>
              <label>/</label>Checkout
            </h2>
          </div>
        </div>
        {/*login*/}
        <div className="check-out">
          <div className="container">
            <div
              className="bs-example4"
              data-example-id="simple-responsive-table"
            >
              <div className="table-responsive">
                <table className="table-heading simpleCart_shelfItem">
                  <tbody>
                    <tr>
                      <th className="table-grid">Item</th>
                      <th>Prices</th>
                      <th>Amount </th>
                      <th>Subtotal</th>
                    </tr>
                    {dsCart.cart.ctcart.map((sp) => (
                      <tr className="cart-header" key={sp.id}>
                        <td className="ring-in">
                          <a href="single.html" className="at-in">
                            <img
                              src={`${sp.product.hinh}`}
                              className="img-responsive"
                              alt="abc"
                            />
                          </a>
                          <div className="sed">
                            <h5>
                              <a href="single.html">{sp.product.tensp}</a>
                            </h5>
                            <p>
                              (At vero eos et accusamus et iusto odio
                              dignissimos ducimus ){" "}
                            </p>
                          </div>
                          <div className="clearfix"> </div>
                          <div className="close1"> </div>
                          <a
                            href="#!"
                            onClick={delete_Cart.bind(this, sp.product.id)}
                          >
                            <span className="close1" />
                          </a>
                        </td>
                        <td>${sp.product.gia}</td>
                        <td className="cart_quantity">
                          <div className="cart_quantity_button">
                            <div className="quantity-select">
                              <div
                                className="entry value-minus"
                                onClick={decrementCount}
                              >
                                &nbsp;
                              </div>
                              <div className="entry value">
                                <span>{count}</span>
                              </div>
                              <div
                                className="entry value-plus active"
                                onClick={incrementCount}
                              >
                                &nbsp;
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="item_price">
                          ${total_price(dsCart.cart.ctcart, "so_luong", "gia")}
                        </td>
                        <td className="add-check">
                          <a
                            className="item_add hvr-skew-backward"
                            href="#!"
                            onClick={addToCart.bind(
                              this,
                              sp.product.id,
                              sp.product.gia,
                              count
                            )}
                          >
                            Add To Cart
                          </a>
                        </td>
                      </tr>
                    ))}
                    <table className="table table-condensed total-result">
                      <tbody>
                        <tr>
                          <td>Cart Sub Total</td>
                          <td>$59</td>
                        </tr>
                        <tr>
                          <td>Exo Tax</td>
                          <td>$2</td>
                        </tr>
                        <tr className="shipping-cost">
                          <td>Shipping Cost</td>
                          <td>Free</td>
                        </tr>
                        <tr>
                          <td>Total</td>
                          <td>
                            <span>
                              $
                              {total_price(
                                dsCart.cart.ctcart,
                                "so_luong",
                                "gia"
                              )}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="produced">
              <a
                href="#!"
                onClick={delete_ALLCart.bind(this, dsCart.cart.id_kh)}
                className="hvr-skew-backward"
              >
                Delete All
              </a>
            </div>
            <div className="produced" style={{ paddingTop: "20px" }}>
              <a href="/Checkout" className="hvr-skew-backward">
                Continue
              </a>
            </div>
          </div>
        </div>
        {/*//login*/}
        {/*brand*/}
        <div className="container">
          <div className="brand">
            <div className="col-md-3 brand-grid">
              <img src="images/ic.png" className="img-responsive" alt="abc" />
            </div>
            <div className="col-md-3 brand-grid">
              <img src="images/ic1.png" className="img-responsive" alt="abc" />
            </div>
            <div className="col-md-3 brand-grid">
              <img src="images/ic2.png" className="img-responsive" alt="abc" />
            </div>
            <div className="col-md-3 brand-grid">
              <img src="images/ic3.png" className="img-responsive" alt="abc" />
            </div>
            <div className="clearfix" />
          </div>
        </div>
        {/*//brand*/}
      </div>
    </Layout>
  );
};
export default Cart;
