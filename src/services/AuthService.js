import axios from "axios";
import swal from "sweetalert";
import {
  loginConfirmedAction,
  logout,
  setUserInfoAction,
} from "../store/actions/AuthActions";

export async function signUp(userInfo) {
  //axios call
  const postData = {
    userInfo,
  };
  return axios.post(`${process.env.REACT_APP_API_BASE_URL}/register`, postData);
}

export function login(userInfo) {
  const postData = {
    userInfo,
    returnSecureToken: true,
  };
  return axios.post(`${process.env.REACT_APP_API_BASE_URL}/login`, postData);
}

export function verifyEmail(token) {
  return axios.post(`${process.env.REACT_APP_API_BASE_URL}/verify-email`, {
    token: token,
  });
}

export function profilePictureUpload({ profilePicture, authToken }) {
  return axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/profile-picture-upload`,
    { profilePicture },
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
}

export const getInterviewers = () => {
  return axios.get(`${process.env.REACT_APP_API_BASE_URL}/get-interviewers`);
};

export function formatError(errorResponse) {
  if (!errorResponse) {
    swal("Error", "Server error!", "error");
    return;
  }
  switch (errorResponse.error) {
    case "EMAIL_EXISTS":
      swal("Error", "Email already exists!", "error");
      break;
    case "EMAIL_NOT_FOUND":
      swal("Error", "Email not found!", "error", { button: "Try Again!" });
      break;
    case "INVALID_PASSWORD":
      swal("Error", "Invalid Password!", "error", { button: "Try Again!" });
      break;
    case "USERNAME_AND_EMAIL_EXIST":
      swal("Error", "Username and email already exist!", "error");
      break;
    case "USERNAME_EXISTS":
      swal("Error", "Username already exists!", "error");
      break;
    case "USER_NOT_VERIFIED":
      swal("Error", "Please verify your email first from your inbox!", "error");
      break;
    case "INVALID_TOKEN":
      swal("Error", "Could not verify the email. Please try again!", "error");
      break;
    case "EMAIL_ALREADY_VERIFIED":
      swal("Error", "Email already verified! Please login!", "error");
      break;
    case "VALIDATION_ERROR":
      swal("Error", "Please check your input!", "error");
      break;
    case "SERVER_ERROR":
      swal("Error", "Server error. Please try again!", "error");
      break;
    default:
      return "";
  }
}

export function saveTokenInLocalStorage(tokenDetails) {
  tokenDetails.expireDate = new Date(
    new Date().getTime() + tokenDetails.expiresIn
  );
  localStorage.setItem("tokenInfo", JSON.stringify(tokenDetails));
}

export function saveUserInfoInLocalStorage(userInfo) {
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
}

export function updateImageInLocalStorage(profilePicture) {
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  userInfo.profilePicture = profilePicture;
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  return userInfo;
}

export function runLogoutTimer(dispatch, timer, history) {
  setTimeout(() => {
    dispatch(logout(history));
  }, timer);
}

export function checkAutoLogin(dispatch, history, location) {
  if (location === "/verify-email") {
    // should always be on the top of the function
    return;
  }
  const userInfoString = localStorage.getItem("userInfo");
  if (!userInfoString) {
    dispatch(logout(history));
    return;
  } else {
    dispatch(setUserInfoAction(JSON.parse(userInfoString)));
  }
  const tokenDetailsString = localStorage.getItem("tokenInfo");
  let tokenDetails = "";
  if (!tokenDetailsString) {
    dispatch(logout(history));
    return;
  }

  tokenDetails = JSON.parse(tokenDetailsString);
  let expireDate = new Date(tokenDetails.expireDate);
  let todaysDate = new Date();

  if (todaysDate > expireDate) {
    dispatch(logout(history));
    return;
  }
  dispatch(loginConfirmedAction(tokenDetails));

  const timer = expireDate.getTime() - todaysDate.getTime();
  runLogoutTimer(dispatch, timer, history);
}
