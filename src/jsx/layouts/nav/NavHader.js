import React, { Fragment, useContext, useState } from "react";
/// React router dom
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";
import logo from "../../../images/logo.png";
import logoText from "../../../images/logo-text.png";

const NavHader = () => {
  const [toggle, setToggle] = useState(false);
  const { openMenuToggle } =
    useContext(ThemeContext);
  return (
    <div className="nav-header">
      <Link to="/dashboard" className="brand-logo">
        <Fragment>
          <img src={logo} alt="logo" />
          <div className="brand-title">
            <img src={logoText} alt="logo" />
            <span className="brand-sub-title">Project Management Admin</span>
          </div>
        </Fragment>
      </Link>

      <div
        className="nav-control"
        onClick={() => {
          setToggle(!toggle);
          openMenuToggle();
        }}>
        <div className={`hamburger ${toggle ? "is-active" : ""}`}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
  );
};

export default NavHader;
