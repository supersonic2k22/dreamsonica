import React, { useEffect } from "react";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { verifyEmailAction } from "../../store/actions/AuthActions";
import { useDispatch } from "react-redux";

const VerifyEmail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");
  
  useEffect(() => {
    if (!token) {
      history.push("/login");
    } else {
      dispatch(verifyEmailAction(token, history));
    }
    // eslint-disable-next-line
  }, [token]);

  return (
    <>
      <div>Please wait while your token is being verified...</div>
    </>
  );
};

export default VerifyEmail;
