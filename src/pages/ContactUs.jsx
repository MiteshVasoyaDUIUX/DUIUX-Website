import React, { useRef } from "react";
import "./ContactUs.css";
import Footer from "../components/Footer";

function LoginPage() {
  const scrollRef = useRef();

  const handleScrolling = () => {
    console.log("Scrolling...");
  };

  const handleContactInfoSubmit = () => {
    window.alert("Thank You For Contact Us...");
  };
  return (
    <div
      className="contactus-page-main"
      ref={scrollRef}
      onScroll={() => handleScrolling(scrollRef.current)}
    >
      <div className="contactus-page">
        <div className="contactus-page-cards">
          <div className="benefits-card">
            <div className="title">Benefits of working with us</div>
            <ul>
              <li>Focus on User-Centered Design</li>
              <li>Professional Growth</li>
              <li>Collaboration and Learning Opportunities</li>
              <li>Creative Freedom</li>
              <li>Access to Cutting-Edge Tools and Technologies</li>
              <li>Competitive Compensation</li>
            </ul>
          </div>
        </div>
        <div className="contact-form-div">
          <div className="contact-form">
            <p>Contact Information</p>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              required
            />
            <input
              type="text"
              name="phoneno"
              id="phoneno"
              placeholder="Enter Phone Number"
              required
            />
            <input
              type="textarea"
              name="message"
              id="message"
              placeholder="Message"
              required
            />
            <input
              type="button"
              name="submit-btn"
              id="login-btn"
              value="SEND MESSAGE"
              onClick={handleContactInfoSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
