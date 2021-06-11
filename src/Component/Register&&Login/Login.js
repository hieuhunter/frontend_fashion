import { Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginRequestedAction } from "../../Redux/Action/AuthAction";
import classNames from "classnames";
import Layout from "../Layout";

const Login = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.auth.login);

  const initialValues = {
    user_name: "",
    password: "",
  };
  const validationSchema = yup.object({
    user_name: yup.string().required("User name is required"),
    password: yup.string().required("Password is required"),
  });

  const onSubmit = (values) => {
    const user = {
      user_name: values.user_name,
      password: values.password,
    };
    console.log(user);
    dispatch(loginRequestedAction(user));
  };
  return (
    <Layout>
      <div>
        <div className="banner-top">
          <div className="container">
            <h1>Login</h1>
            <em />
            <h2>
              <a href="index.html">Home</a>
              <label>/</label>Login
            </h2>
          </div>
        </div>
        {/*login*/}
        <div className="container">
          <div className="login">
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit}>
                  <div className="col-md-6 login-do">
                    <label>Tai khoan</label>
                    <div className="login-mail">
                      {/* <input type="password" placeholder="Password" required /> */}
                      <input
                        type="text"
                        className={classNames("Taikhoan", {
                          "is-invalid":
                            (props.touched.user_name &&
                              props.errors.user_name) ||
                            login.errors?.user_name,
                        })}
                        placeholder="Tai khoan"
                        id="user_name"
                        name="user_name"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.user_name}
                      />
                      {props.touched.user_name && props.errors.user_name && (
                        <div id="invalid-feedback">
                          {props.errors.user_name}
                        </div>
                      )}
                      {login.errors?.user_name && (
                        <div className="invalid-feedback">
                          {login.errors?.user_name}
                        </div>
                      )}
                      <i className="glyphicon glyphicon-lock" />
                    </div>
                    <label>Mat khau</label>
                    <div className="login-mail">
                      {/* <input type="password" placeholder="Password" required /> */}
                      <input
                        type="password"
                        className={classNames("Password", {
                          "is-invalid":
                            props.touched.password && props.errors.password,
                        })}
                        placeholder="Mat khau"
                        id="password"
                        name="password"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.password}
                      />
                      {props.touched.password && props.errors.password && (
                        <div id="invalid-feedback">{props.errors.password}</div>
                      )}
                      {login.errors?.user && (
                        <div className="invalid-feedback">
                          {login.errors?.user}
                        </div>
                      )}
                      <i className="glyphicon glyphicon-lock" />
                    </div>
                    <a className="news-letter " href="#!">
                      <label className="checkbox1">
                        <input type="checkbox" name="checkbox" />
                        <i> </i>Forget Password
                      </label>
                    </a>
                    {login.is_loading ? (
                      <label className="hvr-skew-backward">
                        <input
                          type="submit"
                          defaultValue="login"
                          aria-hidden="true"
                          disabled={props}
                        />
                      </label>
                    ) : (
                      <label className="hvr-skew-backward">
                        <input type="submit" defaultValue="login" />
                      </label>
                    )}
                  </div>
                  <div className="col-md-6 login-right">
                    <h3>Completely Free Account</h3>
                    <p>
                      Pellentesque neque leo, dictum sit amet accumsan non,
                      dignissim ac mauris. Mauris rhoncus, lectus tincidunt
                      tempus aliquam, odio libero tincidunt metus, sed euismod
                      elit enim ut mi. Nulla porttitor et dolor sed condimentum.
                      Praesent porttitor lorem dui, in pulvinar enim rhoncus
                      vitae. Curabitur tincidunt, turpis ac lobortis hendrerit,
                      ex elit vestibulum est, at faucibus erat ligula non neque.
                    </p>

                    <a href="register.html" className=" hvr-skew-backward">
                      Register
                    </a>
                  </div>
                  <div className="clearfix"> </div>
                </form>
              )}
            </Formik>
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
export default Login;
