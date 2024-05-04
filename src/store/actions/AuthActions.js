import swal from "sweetalert";
import {
  formatError,
  getInterviewers,
  login,
  profilePictureUpload,
  runLogoutTimer,
  saveTokenInLocalStorage,
  saveUserInfoInLocalStorage,
  signUp,
  updateImageInLocalStorage,
  verifyEmail,
} from "../../services/AuthService";

export const SIGNUP_CONFIRMED_ACTION = "[signup action] confirmed signup";
export const SIGNUP_FAILED_ACTION = "[signup action] failed signup";
export const LOGIN_CONFIRMED_ACTION = "[login action] confirmed login";
export const LOGIN_FAILED_ACTION = "[login action] failed login";
export const LOADING_TOGGLE_ACTION = "[Loading action] toggle loading";
export const LOGOUT_ACTION = "[Logout action] logout action";
export const SET_USER_INFO = "[Set user data] set user data";
export const SET_INTERVIEWERS = "[Set interviewers] set interviewers";

export function signupAction(userInfo, history) {
  console.log(userInfo);
  return (dispatch) => {
    signUp(userInfo)
      .then((response) => {
        swal("Success", response.data.message, "success");
        history.push("/login");
      })
      .catch((error) => {
        const errorMessage = formatError(error?.response?.data);
        dispatch(signupFailedAction(errorMessage));
      });
  };
}

export function verifyEmailAction(token, history) {
  return (dispatch) => {
    verifyEmail(token)
      .then((response) => {
        swal(
          "Success",
          "Email verified successfully. Login to continue!",
          "success"
        );
        history.push("/login");
      })
      .catch((error) => {
        const errorMessage = formatError(error?.response?.data);
        dispatch(signupFailedAction(errorMessage));
        history.push("/login");
      });
  };
}

export function logout(history) {
  localStorage.removeItem("tokenInfo");
  localStorage.removeItem("userInfo");
  history.push("/login");
  return {
    type: LOGOUT_ACTION,
  };
}

export function loginAction(userInfo, history) {
  return (dispatch) => {
    login(userInfo)
      .then((response) => {
        const { authInfo, userInfo } = response.data;
        saveTokenInLocalStorage(authInfo);
        saveUserInfoInLocalStorage(userInfo);
        runLogoutTimer(dispatch, authInfo.expiresIn, history);
        dispatch(loginConfirmedAction(authInfo));
        swal("Success", "Logged in successfully!", "success");
        dispatch(setUserInfoAction(userInfo));
        history.push("/dashboard");
      })
      .catch((error) => {
        const errorMessage = formatError(error?.response?.data);
        dispatch(loginFailedAction(errorMessage));
      });
  };
}

export function profilePictureUploadAction({ profilePicture, authToken }) {
  return (dispatch) => {
    profilePictureUpload({ profilePicture, authToken })
      .then((response) => {
        dispatch(loadingToggleAction(false));
        const userInfo = updateImageInLocalStorage(
          response.data.profilePicture
        );
        dispatch(setUserInfoAction(userInfo));
        swal("Success", "Profile picture uploaded successfully!", "success");
      })
      .catch((error) => {
        dispatch(loadingToggleAction(false));
        const errorMessage = formatError(error?.response?.data);
        swal("Error", errorMessage, "error");
      });
  };
}

export const getInterviewersAction = () => {
  return (dispatch) => {
    getInterviewers()
      .then((response) => {
        dispatch(loadingToggleAction(false));
        dispatch(setInterviewersAction(response.data));
      })
      .catch((error) => {
        dispatch(loadingToggleAction(false));
        swal("Error", "Interviewers not found!", "error");
      });
  };
};

export function loginFailedAction(data) {
  return {
    type: LOGIN_FAILED_ACTION,
    payload: data,
  };
}

export function loginConfirmedAction(data) {
  return {
    type: LOGIN_CONFIRMED_ACTION,
    payload: data,
  };
}

export function confirmedSignupAction(payload) {
  return {
    type: SIGNUP_CONFIRMED_ACTION,
    payload,
  };
}

export function signupFailedAction(message) {
  return {
    type: SIGNUP_FAILED_ACTION,
    payload: message,
  };
}

export function loadingToggleAction(status) {
  return {
    type: LOADING_TOGGLE_ACTION,
    payload: status,
  };
}

export const setUserInfoAction = (userInfo) => {
  return {
    type: SET_USER_INFO,
    payload: userInfo,
  };
};

export const setInterviewersAction = (interviewers) => {
  return {
    type: SET_INTERVIEWERS,
    payload: interviewers,
  };
};
