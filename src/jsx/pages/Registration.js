import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { connect, useDispatch } from "react-redux";
import {
  loadingToggleAction,
  signupAction,
} from "../../store/actions/AuthActions";
// image
import logoFull from "../../images/logo-full.png";

function Register(props) {
  const dispatch = useDispatch();
  const [firstTry, setFirstTry] = useState(true);

  // User input state and handlers
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    industry: "accounting",
    accountType: "interviewer",
    profilePicture: null,
  });
  const inputHandler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const fileInputChangeHandler = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setUserInfo({
        ...userInfo,
        profilePicture: reader.result,
      });
    };
  };

  // Confirm password state and handler
  const [confirmPassword, setConfirmPassword] = useState("");
  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  useEffect(() => {
    if (!firstTry) {
      inputValidationHandler();
    }
    // eslint-disable-next-line
  }, [userInfo, confirmPassword]);

  // Validation state and handler
  const [validationErrors, setValidationErrors] = useState({});
  const trimInput = () => {
    setUserInfo({
      ...userInfo,
      firstName: userInfo.firstName.trim(),
      lastName: userInfo.lastName.trim(),
      username: userInfo.username.trim(),
      email: userInfo.email.trim(),
    });
  };
  const inputValidationHandler = () => {
    let error = false;
    let errorObj = {};
    if (userInfo.firstName === "") {
      error = true;
      errorObj.firstName = "First name is required";
    } else if (userInfo.firstName.length > 16) {
      error = true;
      errorObj.firstName = "First name must be at max 16 characters long";
    }

    if (userInfo.lastName === "") {
      error = true;
      errorObj.lastName = "Last name is required";
    } else if (userInfo.lastName.length > 16) {
      error = true;
      errorObj.lastName = "Last name must be at max 16 characters long";
    }

    if (userInfo.username === "") {
      error = true;
      errorObj.username = "Username is required";
    }

    if (userInfo.email === "") {
      error = true;
      errorObj.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(userInfo.email)) {
      error = true;
      errorObj.email = "Email is invalid";
    }

    if (userInfo.password === "") {
      error = true;
      errorObj.password = "Password is required";
    } else if (userInfo.password.length < 8) {
      error = true;
      errorObj.password = "Password must be at least 8 characters long";
    } else if (!/[^A-Za-z0-9]/.test(userInfo.password)) {
      error = true;
      errorObj.password =
        "Password must contain at least one special character";
    }

    if (userInfo.password !== confirmPassword) {
      error = true;
      errorObj.confirmPassword = "Password does not match";
    }

    if (userInfo.industry === "") {
      error = true;
      errorObj.industry = "Industry is required";
    } else if (
      ![
        "accounting",
        "architecture",
        "automotive",
        "business",
        "construction",
        "engineering",
        "law enforcement",
        "legal",
        "marketing",
        "manufacturing",
        "software",
        "other",
      ].includes(userInfo.industry)
    ) {
      error = true;
      errorObj.industry = "Industry is invalid";
    }

    if (userInfo.accountType === "") {
      error = true;
      errorObj.accountType = "Account type is required";
    } else if (!["interviewer", "interviewee"].includes(userInfo.accountType)) {
      error = true;
      errorObj.industry = "Account type is invalid";
    }

    if (!userInfo.profilePicture) {
      error = true;
      errorObj.profilePicture = "Profile picture is required";
    }

    setValidationErrors(errorObj);
    return error;
  };

  function onSignUp(e) {
    e.preventDefault();
    setFirstTry(false);
    trimInput();
    const error = inputValidationHandler();
    if (error) {
      swal("Error", "Please check your input", "error");
      return;
    }
    dispatch(loadingToggleAction(true));
    dispatch(signupAction(userInfo, props.history));
  }
  return (
    <div className="authincation h-100 p-meddle">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-6">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <div className="text-center mb-3">
                      <Link to="/login">
                        <img src={logoFull} alt="" />
                      </Link>
                    </div>
                    <h4 className="text-center mb-4 ">Sign up your account</h4>
                    {props.errorMessage && (
                      <div className="">{props.errorMessage}</div>
                    )}
                    {props.successMessage && (
                      <div className="">{props.successMessage}</div>
                    )}
                    <form onSubmit={onSignUp}>
                      <div className="row">
                        <div className="form-group mb-3 col-6 px-1">
                          <label className="mb-1 ps-3">
                            <strong>First name</strong>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            name="firstName"
                            onChange={inputHandler}
                            value={userInfo.firstName}
                          />
                          {validationErrors.firstName && (
                            <div className="text-danger">
                              {validationErrors.firstName}
                            </div>
                          )}
                        </div>
                        <div className="form-group mb-3 col-6 px-1">
                          <label className="mb-1 ps-3">
                            <strong>Last name</strong>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                            name="lastName"
                            onChange={inputHandler}
                            value={userInfo.lastName}
                          />
                          {validationErrors.lastName && (
                            <div className="text-danger">
                              {validationErrors.lastName}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group mb-3 col-6 px-1">
                          <label className="mb-1 ps-3">
                            <strong>Username</strong>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            name="username"
                            onChange={inputHandler}
                            value={userInfo.username}
                          />
                          {validationErrors.username && (
                            <div className="text-danger">
                              {validationErrors.username}
                            </div>
                          )}
                        </div>
                        <div className="form-group mb-3 col-6 px-1">
                          <label className="mb-1 ps-3">
                            <strong>Email</strong>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            onChange={inputHandler}
                            value={userInfo.email}
                          />
                          {validationErrors.email && (
                            <div className="text-danger">
                              {validationErrors.email}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group mb-3 col-6 px-1">
                          <label className="mb-1 ps-3">
                            <strong>Password</strong>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            onChange={inputHandler}
                            value={userInfo.password}
                          />
                          {validationErrors.password && (
                            <div className="text-danger">
                              {validationErrors.password}
                            </div>
                          )}
                        </div>
                        <div className="form-group mb-3 col-6 px-1">
                          <label className="mb-1 ps-3">
                            <strong>Confirm password</strong>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm password"
                            name="password"
                            onChange={confirmPasswordHandler}
                            value={confirmPassword}
                          />
                          {validationErrors.confirmPassword && (
                            <div className="text-danger">
                              {validationErrors.confirmPassword}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group mb-3 col-6 px-1">
                          <label className="mb-1 ps-3">
                            <strong>Industry</strong>
                          </label>
                          <select
                            className="default-select form-control wide mb-3 text-capitalize"
                            name="industry"
                            onChange={inputHandler}
                            value={userInfo.industry}>
                            <option>accounting</option>
                            <option>architecture</option>
                            <option>automotive</option>
                            <option>business</option>
                            <option>construction</option>
                            <option>engineering</option>
                            <option>law enforcement</option>
                            <option>legal</option>
                            <option>marketing</option>
                            <option>manufacturing</option>
                            <option>software</option>
                            <option>other</option>
                          </select>
                          {validationErrors.industry && (
                            <div className="text-danger">
                              {validationErrors.industry}
                            </div>
                          )}
                        </div>
                        <div className="form-group mb-3 col-6 px-1">
                          <label className="mb-1 ps-3">
                            <strong>Account type</strong>
                          </label>
                          <select
                            className="default-select form-control wide mb-3 text-capitalize"
                            name="accountType"
                            onChange={inputHandler}
                            value={userInfo.accountType}>
                            <option>interviewer</option>
                            <option>interviewee</option>
                          </select>
                          {validationErrors.accountType && (
                            <div className="text-danger">
                              {validationErrors.accountType}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group mb-3 col-12 px-1">
                          <label className="mb-1 ps-3">
                            <strong>Profile picture</strong>
                          </label>
                          <div className="form-file">
                            <input
                              type="file"
                              accept="image/*"
                              className="form-file-input form-control"
                              name="profilePicture"
                              onChange={fileInputChangeHandler}
                            />
                          </div>
                          {validationErrors.profilePicture && (
                            <div className="text-danger">
                              {validationErrors.profilePicture}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="text-center mt-4">
                        <button
                          type="submit"
                          className="btn btn-light btn-block">
                          Sign me up
                        </button>
                      </div>
                    </form>
                    <div className="new-account mt-3">
                      <p className="">
                        Already have an account?{" "}
                        <Link className="text-light" to="/login">
                          Sign in
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

export default connect(mapStateToProps)(Register);
