import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  loadingToggleAction,
  loginAction,
} from "../../store/actions/AuthActions";

// image
import logoFull from "../../images/logo-full.png";
import loginbg from "../../images/pic1.png";

function Login(props) {
  const [firstTry, setFirstTry] = useState(true);
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const userInfoHandler = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (!firstTry) {
      inputValidationHandler();
    }
    // eslint-disable-next-line
  }, [userInfo]);

  const [errors, setErrors] = useState({});

  const inputValidationHandler = () => {
    let error = false;
    const errorObj = {};

    if (!userInfo.email) {
      errorObj.email = "Email is Required";
      error = true;
    } else if (!/\S+@\S+\.\S+/.test(userInfo.email)) {
      errorObj.email = "Email is invalid";
      error = true;
    }

    if (!userInfo.password) {
      errorObj.password = "Password is Required";
      error = true;
    }

    setErrors(errorObj);
    return error;
  };

  function onLogin(e) {
    e.preventDefault();
    setFirstTry(false);
    const error = inputValidationHandler();
    if (error) {
      return;
    }

    dispatch(loadingToggleAction(true));
    dispatch(loginAction(userInfo, props.history));
  }

  return (
    <div className="authincation d-flex flex-column flex-lg-row flex-column-fluid">
      <div className="login-aside text-center d-flex flex-column justify-content-center flex-row-auto">
        <div className="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
          <div className="text-center mb-4 pt-5 pt-lg-0">
            <img src={logoFull} alt="logo" width={250}/>
          </div>
        </div>
      </div>
      <div className="container flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
        <div className="d-flex justify-content-center h-100 align-items-center">
          <div className="authincation-content style-2">
            <div className="row no-gutters">
              <div className="col-xl-12 tab-content">
                <div id="sign-in" className="auth-form   form-validation">
                  {props.errorMessage && (
                    <div className="bg-red-300 text-red-900 border border-red-900 p-1 my-2">
                      {props.errorMessage}
                    </div>
                  )}
                  {props.successMessage && (
                    <div className="bg-green-300 text-green-900 border border-green-900 p-1 my-2">
                      {props.successMessage}
                    </div>
                  )}
                  <form onSubmit={onLogin} className="form-validate">
                    <h3 className="text-center mb-4 text-black">
                      Sign in your account
                    </h3>
                    <div className="form-group mb-3">
                      <label className="mb-1" htmlFor="val-email">
                        <strong>Email</strong>
                      </label>
                      <div>
                        <input
                          type="email"
                          className={`form-control ${
                            errors.email ? "is-invalid" : ""
                          }`}
                          value={userInfo.email}
                          onChange={userInfoHandler}
                          name="email"
                          placeholder="Type Your Email Address"
                        />
                        {errors.email && (
                          <div className="invalid-feedback fs-12">
                            {errors.email}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label className="mb-1">
                        <strong>Password</strong>
                      </label>
                      <input
                        type="password"
                        className={`form-control ${
                          errors.password ? "is-invalid" : ""
                        }`}
                        value={userInfo.password}
                        name="password"
                        placeholder="Type Your Password"
                        onChange={userInfoHandler}
                      />
                      {errors.password && (
                        <div className="invalid-feedback fs-12">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <div className="form-row d-flex justify-content-between mt-4 mb-2">
                      <div className="form-group mb-3">
                        <div className="custom-control custom-checkbox ml-1">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="basic_checkbox_1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="basic_checkbox_1">
                            Remember my preference
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="text-center form-group mb-3">
                      <button
                        type="submit"
                        className="btn btn-light btn-block">
                        Sign In
                      </button>
                    </div>
                  </form>
                  <div className="new-account mt-3">
                    <p>
                      Don't have an account?{" "}
                      <Link className="text-light" to="./page-register">
                        Sign up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
    successMessage: state.auth.successMessage,
    showLoading: state.auth.showLoading,
  };
};
export default connect(mapStateToProps)(Login);
