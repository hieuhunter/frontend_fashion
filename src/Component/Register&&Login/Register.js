import React from "react";
import Layout from "../Layout";
import * as yup from "yup";
import { Formik } from "formik";
import { registerRequestedAction } from "../../Redux/Action/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
const Register = () => {
  const dispatch = useDispatch();
  const register = useSelector((state) => state.auth.register);

  const initialValues = {
    ho_ten: "",
    user_name: "",
    email: "",
    password: "",
    password_confirm: "",
    sdt: "",
    dia_chi: "",
  };
  const validationSchema = yup.object().shape({
    ho_ten: yup
      .string()
      .min(3, "Ho ten must be at least 3 characters")
      .max(16, "Ho ten must be at most 16 characters")
      .required("Ho ten is required"),
    user_name: yup
      .string()
      .min(6, "Tai khoan must be at least 6 characters")
      .max(16, "Tai khoan must be at most 16 characters")
      .matches(
        /^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
        "Tai khoan invalid"
      )
      .required("Tai khoan is required"),
    email: yup
      .string()
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Email invalid"
      )
      .required("Email is required"),
    password: yup.string().required("Mat khau is required"),
    password_confirm: yup
      .string()
      .required("Comfirm mat khau is required")
      .oneOf([yup.ref("password")], "Mat khau is not match"),
    sdt: yup
      .string()
      .min(10, "Sdt must be at least 10 characters")
      .matches(/^[0-9]+$/, "Sdt invalid")
      .nullable(),
    dia_chi: yup
      .string()
      .min(6, "Dia chi must be at least 6 characters")
      .max(66, "Dia chi must be at most 66 characters")
      .nullable(),
  });

  const onSubmit = (values) => {
    const user = {
      ho_ten: values.ho_ten,
      user_name: values.user_name,
      email: values.email,
      password: values.password,
      sdt: values.sdt,
      dia_chi: values.dia_chi,
    };
    console.log(user);
    dispatch(registerRequestedAction(user));
  };
  return (
    <Layout>
      <div>
        <div className="banner-top">
          <div className="container">
            <h1>Register</h1>
            <em />
            <h2>
              <a href="index.html">Home</a>
              <label>/</label>Register
            </h2>
          </div>
        </div>
        {/*login*/}
        <div className="container">
          <div className="login">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
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
                            register.errors?.user_name,
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
                      {register.errors?.user_name && (
                        <div className="invalid-feedback">
                          {register.errors?.user_name}
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
                      <i className="glyphicon glyphicon-lock" />
                    </div>
                    <label>Nhap lai password</label>
                    <div className="login-mail">
                      {/* <input type="password" placeholder="Password" required /> */}
                      <input
                        type="password"
                        className={classNames("Password", {
                          "is-invalid":
                            props.touched.password_confirm &&
                            props.errors.password_confirm,
                        })}
                        placeholder="password_confirm"
                        id="password_confirm"
                        name="password_confirm"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.password_confirm}
                      />
                      {props.touched.password_confirm &&
                        props.errors.password_confirm && (
                          <div id="invalid-feedback">
                            {props.errors.password_confirm}
                          </div>
                        )}
                      <i className="glyphicon glyphicon-lock" />
                    </div>
                    <label>Ho va ten</label>
                    <div className="login-mail">
                      {/*   <input type="text" placeholder="Name" required /> */}
                      <input
                        type="text"
                        className={classNames("Name", {
                          "is-invalid":
                            props.touched.ho_ten && props.errors.ho_ten,
                        })}
                        placeholder="Ho Va Ten"
                        id="ho_ten"
                        name="ho_ten"
                        required
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.ho_ten}
                      />
                      {props.touched.ho_ten && props.errors.ho_ten && (
                        <div id="invalid-feedback">{props.errors.ho_ten}</div>
                      )}
                      <i className="glyphicon glyphicon-user" />
                    </div>
                    <label>phone</label>
                    <div className="login-mail">
                      {/*   <input type="text" placeholder="Phone Number" required /> */}
                      <input
                        type="text"
                        className={classNames("Phone Number", {
                          "is-invalid": props.touched.sdt && props.errors.sdt,
                        })}
                        placeholder="So dien thoai"
                        id="sdt"
                        name="sdt"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.sdt}
                      />
                      {props.touched.sdt && props.errors.sdt && (
                        <div id="invalid-feedback">{props.errors.sdt}</div>
                      )}
                      <i className="glyphicon glyphicon-phone" />
                    </div>
                    <label>Email</label>
                    <div className="login-mail">
                      {/* <input type="text" placeholder="Email" required /> */}
                      <input
                        type="text"
                        className={classNames("Email", {
                          "is-invalid":
                            (props.touched.email && props.errors.email) ||
                            register.errors?.email,
                        })}
                        placeholder="Email"
                        id="email"
                        name="email"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.email}
                      />
                      {props.touched.email && props.errors.email && (
                        <div id="invalid-feedback">{props.errors.email}</div>
                      )}
                      {register.errors?.email && (
                        <div className="invalid-feedback">
                          {register.errors?.email}
                        </div>
                      )}
                      <i className="glyphicon glyphicon-envelope" />
                    </div>
                    <label>Dia chi</label>
                    <div className="login-mail">
                      {/*  <input type="password" placeholder="dia_chi" required /> */}
                      <input
                        type="text"
                        className={classNames("dia_chi", {
                          "is-invalid":
                            props.touched.dia_chi && props.errors.dia_chi,
                        })}
                        placeholder="Dia chi"
                        id="dia_chi"
                        name="dia_chi"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.dia_chi}
                      />
                      {props.touched.dia_chi && props.errors.dia_chi && (
                        <div id="invalid-feedback">{props.errors.dia_chi}</div>
                      )}
                      <i className="glyphicon glyphicon-lock" />
                    </div>
                    <a className="news-letter " href="#!">
                      <label className="checkbox1">
                        <input type="checkbox" name="checkbox" />
                        <i> </i>Forget Password
                      </label>
                    </a>
                    {register.is_loading ? (
                      <label className="hvr-skew-backward">
                        <input
                          type="submit"
                          defaultValue="Submit"
                          role="status"
                          aria-hidden="true"
                          disabled={props}
                        />
                      </label>
                    ) : (
                      <label className="hvr-skew-backward">
                        <input type="submit" defaultValue="Submit" />
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
                    <a href="login.html" className="hvr-skew-backward">
                      Login
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
export default Register;
