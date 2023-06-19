import React from "react";
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentLoc = location.pathname;

  return (
    <div className="header" id="header">
      <div className="header-logo " onClick={() => navigate("/")}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/shoppingsite-e25c4.appspot.com/o/Animation%20Images%2FLOGO.png?alt=media&token=e4d38200-5ed9-48f5-9199-9b5bbca87b39"
          alt=""
        />
      </div>
      <div className="header-menu">
        <div
          className={currentLoc === "/" ? "active-home-btn" : "home-btn"}
          onClick={() => navigate("/")}
        >
          Home
        </div>
        <div
          className={
            currentLoc === "/portfolio" ? "active-explore-btn" : "explore-btn"
          }
          onClick={() => navigate("/portfolio")}
        >
          Portfolio
        </div>
        <div
          className={
            currentLoc === "/aboutus" ? "active-aboutus-btn" : "aboutus-btn"
          }
          onClick={() => navigate("/aboutus")}
        >
          About
        </div>
        <div
          className={
            currentLoc === "/contactus"
              ? "active-contactus-btn"
              : "contactus-btn"
          }
          onClick={() => navigate("/contactus")}
        >
          Contact Us
        </div>
      </div>
    </div>
  );
}

export default Header;
