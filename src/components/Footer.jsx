import React, { useState } from "react";
import "./Footer.css";
import { useLocation, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const [playLocAnim, setPlayLocAnim] = useState(false);
  const [playCallAnim, setPlayCallAnim] = useState(false);
  const [playEmailAnim, setPlayEmailAnim] = useState(false);

  const footerClass =
    location.pathname === "/portfolio" ? "footer black-footer" : "footer";

  // console.log("Footer Class : ", footerClass);

  return (
    <div className={footerClass}>
      <div className="contact-details">
        <div
          className="location"
          onMouseEnter={() => setPlayLocAnim(true)}
          onMouseLeave={() => setPlayLocAnim(false)}
        >
          <div className="icon">
            <img
              src={
                playLocAnim
                  ? "https://firebasestorage.googleapis.com/v0/b/shoppingsite-e25c4.appspot.com/o/Animation%20Images%2FLocation_GIF.gif?alt=media&token=1b88f0ee-8316-4552-862f-76a7c15c29e7"
                  : "https://firebasestorage.googleapis.com/v0/b/shoppingsite-e25c4.appspot.com/o/Animation%20Images%2FLocation_Static.png?alt=media&token=976742e3-1024-4619-b4c1-23a0bb8e3861"
              }
              alt=""
            />
          </div>
          <div className="details">
            <div className="title">Find Us</div>
            <div className="content">
              123 Main Street Anytown, USA Postal Code: 12345
            </div>
          </div>
        </div>
        <div
          className="contact-number"
          onMouseEnter={() => setPlayCallAnim(true)}
          onMouseLeave={() => setPlayCallAnim(false)}
        >
          <div className="icon">
            <img
              src={
                playCallAnim
                  ? "https://firebasestorage.googleapis.com/v0/b/shoppingsite-e25c4.appspot.com/o/Animation%20Images%2FCall_GIF.gif?alt=media&token=2c56d187-71c9-4efd-906c-1f884d51adf4"
                  : "https://firebasestorage.googleapis.com/v0/b/shoppingsite-e25c4.appspot.com/o/Animation%20Images%2FCall_Static.png?alt=media&token=7045172e-087f-4898-98cc-c35e297d5264"
              }
              alt=""
            />
          </div>
          <div className="details">
            <div className="title">Call Us</div>
            <div className="content">+1 (555) 123-4567</div>
          </div>
        </div>
        <div
          className="email"
          onMouseEnter={() => setPlayEmailAnim(true)}
          onMouseLeave={() => setPlayEmailAnim(false)}
        >
          <div className="icon">
            <img
              src={
                playEmailAnim
                  ? "https://firebasestorage.googleapis.com/v0/b/shoppingsite-e25c4.appspot.com/o/Animation%20Images%2FEmail_GIF.gif?alt=media&token=69e4aad1-c734-4e8f-ae1d-cb38b670427e"
                  : "https://firebasestorage.googleapis.com/v0/b/shoppingsite-e25c4.appspot.com/o/Animation%20Images%2FEmail_Static.png?alt=media&token=0ba09bcc-9e70-4e9a-a79d-5e37857f9839"
              }
              alt=""
            />
          </div>
          <div className="details">
            <div className="title">Mail Us</div>
            <div className="content">uiux@mail.com</div>
          </div>
        </div>
      </div>
      <div className="other-links">
        <div className="subdiv1">
          <div className="company-logo">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/shoppingsite-e25c4.appspot.com/o/Animation%20Images%2FLOGO.png?alt=media&token=e4d38200-5ed9-48f5-9199-9b5bbca87b39"
              alt=""
            />
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do
            eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem
            ipsum dolor sit amet.
          </div>
          <div className="follow">
            <p>Follow us</p>
            <div className="follow-icon">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/shoppingsite-e25c4.appspot.com/o/Animation%20Images%2Ffacebook.png?alt=media&token=87f093a6-9f1c-4ec5-9526-abfb0266f11e"
                alt=""
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/shoppingsite-e25c4.appspot.com/o/Animation%20Images%2Finstagram.png?alt=media&token=77977a43-056b-4add-92d5-3a029b6ad2f4"
                alt=""
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/shoppingsite-e25c4.appspot.com/o/Animation%20Images%2Ftwitter.png?alt=media&token=90f9035e-b2b0-499e-9927-78cff1c098a2"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="subdiv2">
          <div className="useful-links">USEFUL LINKS</div>
          <div className="links">
            <div>
              <div onClick={() => navigate("/")}>Home</div>
              <div onClick={() => navigate("/portfolio")}>Portfolio</div>
              <div>Services</div>
              <div onClick={() => navigate("/aboutus")}>About</div>
              <div onClick={() => navigate("/contactus")}>Contact</div>
              <div>Latest News</div>
            </div>
          </div>
        </div>
        <div className="subdiv3">
          <div className="title">Subscribe to NewLetter</div>
          <div className="mail-box">
            <input type="text" placeholder="Enter Email" />
            <input type="button" value="Submit" />
          </div>
          <div className="copyright">Copyright © 2023</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
