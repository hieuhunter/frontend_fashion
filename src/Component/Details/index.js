import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  addcartRequestedAction,
  cartRequestedAction,
} from "../../Redux/Action/cartAction";
import { ctproductRequestedAction } from "../../Redux/Action/productAction";
import Layout from "../Layout";

const Detail = () => {
  const dispatch = useDispatch();
  const ctProduct = useSelector((state) => state.san_pham.ct_san_pham);
  let { id } = useParams();
  let [count, setCount] = useState(0);
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

  useEffect(() => {
    dispatch(ctproductRequestedAction(id));
  }, [dispatch, id]);
  return (
    <Layout>
      <div className="banner-top">
        <div className="container">
          <h1>Single</h1>
          <em />
          <h2>
            <a href="index.html">Home</a>
            <label>/</label>Single
          </h2>
        </div>
      </div>
      <div className="single">
        <div className="container">
          <div className="col-md-9">
            <div className="col-md-5 grid">
              <div className="flexslider">
                <ul className="slides">
                  <li data-thumb="images/si.jpg">
                    <div className="thumb-image">
                      {" "}
                      <img
                        src={`${ctProduct.san_pham.hinh}`}
                        data-imagezoom="true"
                        className="img-responsive"
                        alt="abc"
                      />{" "}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-7 single-top-in">
              <div className="span_2_of_a1 simpleCart_shelfItem">
                <h3>{ctProduct.san_pham.tensp}</h3>
                <p className="in-para">
                  {" "}
                  There are many variations of passages of Lorem Ipsum.
                </p>
                <div className="price_single">
                  <span className="reducedfrom item_price">
                    ${ctProduct.san_pham.gia}
                  </span>
                  <a href="#!">click for offer</a>
                  <div className="clearfix" />
                </div>
                <h4 className="quick">Detail:</h4>
                <p className="quick_desc"> {ctProduct.san_pham.chitiet}</p>
                <div className="wish-list">
                  <ul>
                    <li className="wish">
                      <a href="#!">
                        <span
                          className="glyphicon glyphicon-check"
                          aria-hidden="true"
                        />
                        Add to Wishlist
                      </a>
                    </li>
                    <li className="compare">
                      <a
                        href="#!"
                        onClick={() =>
                          addToCart(
                            ctProduct.san_pham.gia,
                            ctProduct.san_pham.id
                          )
                        }
                      >
                        <span
                          className="glyphicon glyphicon-resize-horizontal"
                          aria-hidden="true"
                        />
                        Add to Compare
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="quantity">
                  <div className="quantity-select">
                    <div className="entry value-minus" onClick={decrementCount}>
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
                {/*quantity*/}
                {/*quantity*/}
                <a
                  href="#!"
                  onClick={addToCart.bind(
                    this,
                    ctProduct.san_pham.id,
                    ctProduct.san_pham.gia,
                    count
                  )}
                  className="add-to item_add hvr-skew-backward"
                >
                  Add to cart
                </a>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="clearfix"> </div>
            {/**/}
            <div className="tab-head">
              <nav className="nav-sidebar">
                <ul className="nav tabs">
                  <li className="active">
                    <a href="#tab1" data-toggle="tab">
                      Product Description
                    </a>
                  </li>
                  <li className>
                    <a href="#tab2" data-toggle="tab">
                      Additional Information
                    </a>
                  </li>
                  <li className>
                    <a href="#tab3" data-toggle="tab">
                      Reviews
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="tab-content one">
                <div className="tab-pane active text-style" id="tab1">
                  <div className="facts">
                    <p>
                      {" "}
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words, combined{" "}
                    </p>
                    <ul>
                      <li>
                        <span
                          className="glyphicon glyphicon-ok"
                          aria-hidden="true"
                        />
                        Research
                      </li>
                      <li>
                        <span
                          className="glyphicon glyphicon-ok"
                          aria-hidden="true"
                        />
                        Design and Development
                      </li>
                      <li>
                        <span
                          className="glyphicon glyphicon-ok"
                          aria-hidden="true"
                        />
                        Porting and Optimization
                      </li>
                      <li>
                        <span
                          className="glyphicon glyphicon-ok"
                          aria-hidden="true"
                        />
                        System integration
                      </li>
                      <li>
                        <span
                          className="glyphicon glyphicon-ok"
                          aria-hidden="true"
                        />
                        Verification, Validation and Testing
                      </li>
                      <li>
                        <span
                          className="glyphicon glyphicon-ok"
                          aria-hidden="true"
                        />
                        Maintenance and Support
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tab-pane text-style" id="tab2">
                  <div className="facts">
                    <p>
                      {" "}
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source. Lorem Ipsum
                      comes from sections{" "}
                    </p>
                    <ul>
                      <li>
                        <span
                          className="glyphicon glyphicon-ok"
                          aria-hidden="true"
                        />
                        Multimedia Systems
                      </li>
                      <li>
                        <span
                          className="glyphicon glyphicon-ok"
                          aria-hidden="true"
                        />
                        Digital media adapters
                      </li>
                      <li>
                        <span
                          className="glyphicon glyphicon-ok"
                          aria-hidden="true"
                        />
                        Set top boxes for HDTV and IPTV Player
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tab-pane text-style" id="tab3">
                  <div className="facts">
                    <p>
                      {" "}
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words, combined{" "}
                    </p>
                    <ul>
                      <li>
                        <span
                          className="glyphicon glyphicon-ok"
                          aria-hidden="true"
                        />
                        Research
                      </li>
                      <li>
                        <span
                          className="glyphicon glyphicon-ok"
                          aria-hidden="true"
                        />
                        Design and Development
                      </li>
                      <li>
                        <span
                          className="glyphicon glyphicon-ok"
                          aria-hidden="true"
                        />
                        Porting and Optimization
                      </li>
                      <li>
                        <span
                          className="glyphicon glyphicon-ok"
                          aria-hidden="true"
                        />
                        System integration
                      </li>
                      <li>
                        <span
                          className="glyphicon glyphicon-ok"
                          aria-hidden="true"
                        />
                        Verification, Validation and Testing
                      </li>
                      <li>
                        <span
                          className="glyphicon glyphicon-ok"
                          aria-hidden="true"
                        />
                        Maintenance and Support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            {/**/}
          </div>
          {/*-*/}
          <div className="col-md-3 product-bottom product-at">
            {/*categories*/}
            <div className=" rsidebar span_1_of_left">
              <h4 className="cate">Categories</h4>
              <ul className="menu-drop">
                <li className="item1">
                  <a href="#!">Men </a>
                  <ul className="cute">
                    <li className="subitem1">
                      <a href="product.html">Cute Kittens </a>
                    </li>
                    <li className="subitem2">
                      <a href="product.html">Strange Stuff </a>
                    </li>
                    <li className="subitem3">
                      <a href="product.html">Automatic Fails </a>
                    </li>
                  </ul>
                </li>
                <li className="item2">
                  <a href="#!">Women </a>
                  <ul className="cute">
                    <li className="subitem1">
                      <a href="product.html">Cute Kittens </a>
                    </li>
                    <li className="subitem2">
                      <a href="product.html">Strange Stuff </a>
                    </li>
                    <li className="subitem3">
                      <a href="product.html">Automatic Fails </a>
                    </li>
                  </ul>
                </li>
                <li className="item3">
                  <a href="#!">Kids</a>
                  <ul className="cute">
                    <li className="subitem1">
                      <a href="product.html">Cute Kittens </a>
                    </li>
                    <li className="subitem2">
                      <a href="product.html">Strange Stuff </a>
                    </li>
                    <li className="subitem3">
                      <a href="product.html">Automatic Fails</a>
                    </li>
                  </ul>
                </li>
                <li className="item4">
                  <a href="#!">Accessories</a>
                  <ul className="cute">
                    <li className="subitem1">
                      <a href="product.html">Cute Kittens </a>
                    </li>
                    <li className="subitem2">
                      <a href="product.html">Strange Stuff </a>
                    </li>
                    <li className="subitem3">
                      <a href="product.html">Automatic Fails</a>
                    </li>
                  </ul>
                </li>
                <li className="item4">
                  <a href="#!">Shoes</a>
                  <ul className="cute">
                    <li className="subitem1">
                      <a href="product.html">Cute Kittens </a>
                    </li>
                    <li className="subitem2">
                      <a href="product.html">Strange Stuff </a>
                    </li>
                    <li className="subitem3">
                      <a href="product.html">Automatic Fails </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/*initiate accordion*/}
            {/*//menu*/}
            <section className="sky-form">
              <h4 className="cate">Discounts</h4>
              <div className="row row1 scroll-pane">
                <div className="col col-4">
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" defaultChecked />
                    <i />
                    Upto - 10% (20)
                  </label>
                </div>
                <div className="col col-4">
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    40% - 50% (5)
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    30% - 20% (7)
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    10% - 5% (2)
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    Other(50)
                  </label>
                </div>
              </div>
            </section>
            {/**/}

            <section className="sky-form">
              <h4 className="cate">Brand</h4>
              <div className="row row1 scroll-pane">
                <div className="col col-4">
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" defaultChecked />
                    <i />
                    Roadstar
                  </label>
                </div>
                <div className="col col-4">
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    Levis
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    Persol
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    Nike
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    Edwin
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    New Balance
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    Paul Smith
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    Ray-Ban
                  </label>
                </div>
              </div>
            </section>
          </div>
          <div className="clearfix"> </div>
        </div>
        {/*brand*/}
        <div className="container">
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
        </div>
        {/*//brand*/}
      </div>
    </Layout>
  );
};
export default Detail;
