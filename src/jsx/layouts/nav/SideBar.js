/// Menu
import Metismenu from "metismenujs";
import React, { Component, useContext, useEffect, useState } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";
//import { Dropdown } from "react-bootstrap";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { ThemeContext } from "../../../context/ThemeContext";
import { useSelector } from "react-redux";
//import LogoutPage from './Logout';

/// Image
//import user from "../../../images/user.jpg";
//import profile from "../../../images/user.jpg";

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new Metismenu(this.$el);
  }
  componentWillUnmount() {}
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

const SideBar = () => {
  const userInfo = useSelector((state) => state?.auth?.userInfo);
  const accountType = userInfo?.accountType;

  const { iconHover, sidebarposition, headerposition, sidebarLayout } =
    useContext(ThemeContext);
  useEffect(() => {
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);

  }, []);
  //let scrollPosition = useScrollPosition();

  // For scroll
  const [hideOnScroll, setHideOnScroll] = useState(true);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );
  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];

  return (
    <div
      className={`dlabnav ${iconHover} ${
        sidebarposition.value === "fixed" &&
        sidebarLayout.value === "horizontal" &&
        headerposition.value === "static"
          ? hideOnScroll > 120
            ? "fixed"
            : ""
          : ""
      }`}>
      <PerfectScrollbar className="dlabnav-scroll">
        <MM className="metismenu" id="menu">
          <li className={`${path === "" ? "mm-active" : ""}`}>
            <Link className="ai-icon" to="/">
              <i className="fas fa-home"></i>
              <span className="nav-text">Home</span>
            </Link>
          </li>

          <li className={`${path === "messages" ? "mm-active" : ""}`}>
            <Link className="ai-icon" to="/messages">
              <i className="fas fa-envelope"></i>
              <span className="nav-text">Messages</span>
            </Link>
          </li>

          {accountType === "interviewer" && (
            <li className={`${path === "calender" ? "mm-active" : ""}`}>
              <Link className="ai-icon" to="/calender">
                <i className="fas fa-calendar"></i>
                <span className="nav-text">Calender</span>
              </Link>
            </li>
          )}

          {accountType === "interviewee" && (
            <li className={`${path === "interviewers" ? "mm-active" : ""}`}>
              <Link className="ai-icon" to="/interviewers">
                <i className="fas fa-user"></i>
                <span className="nav-text">Interviewers</span>
              </Link>
            </li>
          )}

          <li className={`${path === "interviewes" ? "mm-active" : ""}`}>
            <Link className="ai-icon" to="/interviewes">
              <i className="fas fa-clipboard"></i>
              <span className="nav-text">Interviews</span>
            </Link>
          </li>

          {accountType === "interviewer" ? (
            <li className={`${path === "jobs" ? "mm-active" : ""}`}>
              <Link className="ai-icon" to="/jobs">
                <i className="fas fa-suitcase"></i>
                <span className="nav-text">Jobs</span>
              </Link>
            </li>
          ) : (
            <li className={`${path === "postings" ? "mm-active" : ""}`}>
              <Link className="ai-icon" to="/postings">
                <i className="fas fa-user-check"></i>
                <span className="nav-text">Postings</span>
              </Link>
            </li>
          )}
          <li className={`${path === "settings" ? "mm-active" : ""}`}>
            <Link className="ai-icon" to="/settings">
              <i className="fas fa-sliders-h"></i>
              <span className="nav-text">Settings</span>
            </Link>
          </li>
        </MM>
      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;
