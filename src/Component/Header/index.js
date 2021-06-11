import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useRouter from "../../lib/hooks/useRouter";
import {
  checkloginAction,
  logoutRequestedAction,
} from "../../Redux/Action/AuthAction";
import { brandRequestedAction } from "../../Redux/Action/brandAction";
import { cartRequestedAction } from "../../Redux/Action/cartAction";
import { categoryRequestedAction } from "../../Redux/Action/danhmucAction";

const Total = function (arr, prop) {
  return arr.reduce(function (a, b) {
    return a + b[prop];
  }, 0);
};

const Header = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const dsCategory = useSelector((state) => state.danh_muc.ds_category);
  const dsBrand = useSelector((state) => state.thuong_hieu.ds_brand);
  const login = useSelector((state) => state.auth.login);
  const dsCart = useSelector((state) => state.gio_hang.gio_hang);

  useEffect(() => {
    dispatch(categoryRequestedAction());
    dispatch(brandRequestedAction());
    dispatch(checkloginAction());
    dispatch(cartRequestedAction());
  }, [dispatch]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutRequestedAction(router));
  };
  return (
    /* <!--header--> */
    <div className="header">
      <div className="container">
        <div className="head">
          <div className=" logo">
            <Link to="/">
              <img src="/images/logo.png" alt="abc" />
            </Link>
          </div>
        </div>
      </div>
      <div className="header-top">
        <div className="container">
          <div className="col-sm-5 col-md-offset-2  header-login">
            <ul>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/Register">Register</Link>
              </li>

              <li>
                <Link to="/Checkout">Checkout</Link>
              </li>
              {login.is_authenticated && (
                <li className="dropdown mega-dropdown active ">
                  <a className="color1" href="#!" data-toggle="dropdown">
                    <i className="bi bi-gender-female">
                      {login.user?.user_name}
                    </i>
                    <span className="caret" />
                  </a>
                  <div className="dropdown-menu ">
                    <div className="col1  listcolo">
                      <div className="h_nav">
                        <Link to="/Personal" style={{ color: "black" }}>
                          Profile
                        </Link>

                        <Link
                          to="/Personal"
                          style={{ color: "black" }}
                          onClick={handleLogout}
                        >
                          Logout
                        </Link>
                      </div>
                    </div>

                    <div className="clearfix" />
                  </div>
                </li>
              )}
            </ul>
          </div>

          <div className="col-sm-5 header-social">
            <ul>
              <li>
                <a href="#!">
                  <i />
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="ic1" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="ic2" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="ic3" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="ic4" />
                </a>
              </li>
            </ul>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
      {children}
      <div className="container">
        <div className="head-top">
          <div className="col-sm-8 col-md-offset-2 h_menu4">
            <nav className="navbar nav_bottom" role="navigation">
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="navbar-header nav_2">
                <button
                  type="button"
                  className="navbar-toggle collapsed navbar-toggle1"
                  data-toggle="collapse"
                  data-target="#bs-megadropdown-tabs"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              {/* Collect the nav links, forms, and other content for toggling */}
              <div
                className="collapse navbar-collapse"
                id="bs-megadropdown-tabs"
              >
                <ul className="nav navbar-nav nav_1">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="dropdown mega-dropdown active">
                    <a className="color1" href="#!" data-toggle="dropdown">
                      Women
                      <span className="caret" />
                    </a>
                    <div className="dropdown-menu ">
                      <div className="menu-top">
                        <div className="col1">
                          <div className="h_nav">
                            <h4>Submenu1</h4>
                            {dsCategory.danh_muc.map((dm) => (
                              <ul key={dm.id}>
                                <li>
                                  <Link to={`/Product/${dm.id}`}>
                                    {dm.ten_dm}
                                  </Link>
                                </li>
                              </ul>
                            ))}
                          </div>
                        </div>
                        <div className="col1">
                          <div className="h_nav">
                            <h4>Submenu2</h4>
                            {dsCategory.danh_muc.map((dm) => (
                              <ul key={dm.id}>
                                <li>
                                  <Link to={`/Product/${dm.id}`}>
                                    {dm.ten_dm}
                                  </Link>
                                </li>
                              </ul>
                            ))}
                          </div>
                        </div>
                        <div className="col1">
                          <div className="h_nav">
                            <h4>Submenu3</h4>
                            {dsCategory.danh_muc.map((dm) => (
                              <ul key={dm.id}>
                                <li>
                                  <Link to={`/Product/${dm.id}`}>
                                    {dm.ten_dm}
                                  </Link>
                                </li>
                              </ul>
                            ))}
                          </div>
                        </div>
                        <div className="col1">
                          <div className="h_nav">
                            <h4>Submenu4</h4>
                            {dsCategory.danh_muc.map((dm) => (
                              <ul key={dm.id}>
                                <li>
                                  <Link to={`/Product/${dm.id}`}>
                                    {dm.ten_dm}
                                  </Link>
                                </li>
                              </ul>
                            ))}
                          </div>
                        </div>
                        <div className="col1 col5">
                          <img
                            src="/images/me.png"
                            className="img-responsive"
                            alt="abc"
                          />
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </li>
                  <li className="dropdown mega-dropdown active">
                    <a className="color2" href="#!" data-toggle="dropdown">
                      Men
                      <span className="caret" />
                    </a>
                    <div className="dropdown-menu mega-dropdown-menu">
                      <div className="menu-top">
                        <div className="col1">
                          <div className="h_nav">
                            <h4>Submenu1</h4>
                            {dsBrand.thuong_hieu.map((th) => (
                              <ul key={th.id}>
                                <li>
                                  <Link to={`/Product_Brand/${th.id}`}>
                                    {th.ten_th}
                                  </Link>
                                </li>
                              </ul>
                            ))}
                          </div>
                        </div>
                        <div className="col1">
                          <div className="h_nav">
                            <h4>Submenu2</h4>
                            {dsBrand.thuong_hieu.map((th) => (
                              <ul key={th.id}>
                                <li>
                                  <Link to={`/Product_Brand/${th.id}`}>
                                    {th.ten_th}
                                  </Link>
                                </li>
                              </ul>
                            ))}
                          </div>
                        </div>
                        <div className="col1">
                          <div className="h_nav">
                            <h4>Submenu3</h4>
                            {dsBrand.thuong_hieu.map((th) => (
                              <ul key={th.id}>
                                <li>
                                  <Link to={`/Product_Brand/${th.id}`}>
                                    {th.ten_th}
                                  </Link>
                                </li>
                              </ul>
                            ))}
                          </div>
                        </div>
                        <div className="col1">
                          <div className="h_nav">
                            <h4>Submenu4</h4>
                            {dsBrand.thuong_hieu.map((th) => (
                              <ul key={th.id}>
                                <li>
                                  <Link to={`/Product_Brand/${th.id}`}>
                                    {th.ten_th}
                                  </Link>
                                </li>
                              </ul>
                            ))}
                          </div>
                        </div>
                        <div className="col1 col5">
                          <img
                            src="/images/me1.png"
                            className="img-responsive"
                            alt="abc"
                          />
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <a className="color3" href="product.html">
                      Sale
                    </a>
                  </li>
                  <li>
                    <a className="color4" href="404.html">
                      About
                    </a>
                  </li>
                  <li>
                    <Link className="color5" to="/Typo">
                      Short Codes
                    </Link>
                  </li>
                  <li>
                    <Link className="color6" to="/Contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              {/* /.navbar-collapse */}
            </nav>
          </div>
          <div className="col-sm-2 search-right">
            <ul className="heart">
              <li>
                <a href="wishlist.html">
                  <span
                    className="glyphicon glyphicon-heart"
                    aria-hidden="true"
                  ></span>
                </a>
              </li>
              <li>
                <a
                  className="play-icon popup-with-zoom-anim"
                  href="#small-dialog"
                >
                  <i className="glyphicon glyphicon-search"> </i>
                </a>
              </li>
            </ul>
            <div className="cart box_1">
              <Link to="/Cart">
                <h3>
                  {" "}
                  <div className="total">
                    <span />
                    {Total(dsCart.cart.ctcart, "so_luong")}
                  </div>
                  <img src="/images/cart.png" alt="abc" />
                </h3>
              </Link>
            </div>
            <div className="clearfix"> </div>
            {/*-*/}
            {/*-pop-up-box--*/}
            <link
              href="css/popuo-box.css"
              rel="stylesheet"
              type="text/css"
              media="all"
            />
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </div>
  );
};
export default Header;
