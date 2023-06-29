import React, { useState } from "react";
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";
import MenuBar from "../assets/menu.png";
import Logo from "../assets/LOGO.png";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentLoc = location.pathname;

  const [menulist, setMenuList] = useState(false);

  return (
    <div className="header" id="header">
      <div className="header-logo " onClick={() => navigate("/")}>
        <img src={Logo} alt="" />
      </div>
      <div className="header-menu">
        <div>
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
        <div className="hambg-menu" onClick={() => setMenuList(!menulist)}>
          <img src={MenuBar} alt="" />
          {menulist ? (
            <>
              <ul>
                <li>
                  <a href="/">Home</a>
                  <a href="/portfolio">Portfolio</a>
                  <a href="/aboutus">About</a>
                  <a href="/contactus">Contact Us</a>
                </li>
              </ul>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
