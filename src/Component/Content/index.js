import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addcartRequestedAction,
  cartRequestedAction,
} from "../../Redux/Action/cartAction";
import { productRequestedAction } from "../../Redux/Action/productAction";

const Content = () => {
  const dispatch = useDispatch();
  const dsProduct = useSelector((state) => state.san_pham.ds_san_pham);

  const addToCart = (id, gia) => {
    const gio_hang = {
      id_sp: id,
      so_luong: 1,
      gia: gia,
    };
    dispatch(addcartRequestedAction(gio_hang));
    dispatch(cartRequestedAction());
  };

  useEffect(() => {
    dispatch(productRequestedAction());
  }, [dispatch]);
  return (
    <div className="content">
      <div className="container">
        <div className="content-top">
          <div className="col-md-6 col-md">
            <div className="col-1">
              <Link to="/" className="b-link-stroke b-animate-go  thickbox">
                <img
                  src="/images/pi.jpg"
                  className="img-responsive"
                  alt="abc"
                />
                <div className="b-wrapper1 long-img">
                  <p className="b-animate b-from-right    b-delay03 ">
                    Lorem ipsum
                  </p>
                  <label className="b-animate b-from-right    b-delay03 " />
                  <h3 className="b-animate b-from-left    b-delay03 ">
                    Trendy
                  </h3>
                </div>
              </Link>
            </div>
            <div className="col-2">
              <span>Hot Deal</span>
              <h2>
                <Link to="/">Luxurious &amp; Trendy</Link>
              </h2>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years
              </p>
              <Link to="/" className="buy-now">
                Buy Now
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-md1">
            <div className="col-3">
              <a href="single.html">
                <img
                  src="images/pi1.jpg"
                  className="img-responsive"
                  alt="abc"
                />
                <div className="col-pic">
                  <p>Lorem Ipsum</p>
                  <label />
                  <h5>For Men</h5>
                </div>
              </a>
            </div>
            <div className="col-3">
              <a href="single.html">
                <img
                  src="images/pi2.jpg"
                  className="img-responsive"
                  alt="abc"
                />
                <div className="col-pic">
                  <p>Lorem Ipsum</p>
                  <label />
                  <h5>For Kids</h5>
                </div>
              </a>
            </div>
            <div className="col-3">
              <a href="single.html">
                <img
                  src="images/pi3.jpg"
                  className="img-responsive"
                  alt="abc"
                />
                <div className="col-pic">
                  <p>Lorem Ipsum</p>
                  <label />
                  <h5>For Women</h5>
                </div>
              </a>
            </div>
          </div>
          <div className="clearfix" />
        </div>
        {/*products*/}
        <div className="content-mid">
          <h3>Trending Items</h3>
          <label className="line" />
          <div className="mid-popular">
            {dsProduct.san_pham.map((sp) => (
              <div
                className="col-md-3 item-grid simpleCart_shelfItem"
                key={sp.id}
              >
                <div className=" mid-pop">
                  <div className="pro-img">
                    <img
                      src={`${sp.hinh}`}
                      className="img-responsive"
                      alt="abc"
                    />
                    <div className="zoom-icon ">
                      <a className="picture" href="images/pc.jpg" rel="title">
                        <i className="glyphicon glyphicon-search icon " />
                      </a>
                      <Link to={`/Detail/${sp.id}`}>
                        <i className="glyphicon glyphicon-menu-right icon" />
                      </Link>
                    </div>
                  </div>
                  <div className="mid-1">
                    <div className="women">
                      <div className="women-top">
                        <span>Women</span>
                        <h6>
                          <Link to={`/Detail/${sp.id}`}>{sp.tensp}</Link>
                        </h6>
                      </div>
                      <div className="img item_add">
                        <a
                          href="#!"
                          onClick={addToCart.bind(this, sp.id, sp.gia)}
                        >
                          <img src={"/images/ca.png"} alt="abc" />
                        </a>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="mid-2">
                      <p>
                        <label>$100.00</label>
                        <em className="item_price">${sp.gia}</em>
                      </p>
                      <div className="block">
                        <div className="starbox small ghosting"> </div>
                      </div>
                      <div className="clearfix" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="clearfix" />
          </div>
        </div>
        {/*//products*/}
        {/*brand*/}
        <div className="brand">
          <div className="col-md-3 brand-grid">
            <img src="/images/ic.png" className="img-responsive" alt="abc" />
          </div>
          <div className="col-md-3 brand-grid">
            <img src="/images/ic1.png" className="img-responsive" alt="abc" />
          </div>
          <div className="col-md-3 brand-grid">
            <img src="/images/ic2.png" className="img-responsive" alt="abc" />
          </div>
          <div className="col-md-3 brand-grid">
            <img src="/images/ic3.png" className="img-responsive" alt="abc" />
          </div>
          <div className="clearfix" />
        </div>
        {/*//brand*/}
      </div>
    </div>
  );
};
export default Content;
