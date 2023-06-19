import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./HomePage.css";
import Footer from "../components/Footer";

function HomePage() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const [scrollArea, setScrollArea] = useState(0);
  const [randomProjCalc, setRandomProjCalc] = useState(0);
  const [randomDesignCalc, setRandomDesignCalc] = useState(0);
  const [randomClientCalc, setRandomClientCalc] = useState(0);
  const [div1, setDiv1] = useState(false);
  const [div1Visibility, setDiv1Visibility] = useState(0);

  let titleColorInterval;

  useEffect(() => {
    if (
      scrollArea >= window.innerHeight &&
      scrollArea <= 2 * window.innerHeight
    ) {
      console.log("SETTING DIV-I");
      setDiv1(true);
    } else if (
      scrollArea <= window.innerHeight / 4 ||
      scrollArea >= 2 * window.innerHeight
    ) {
      setDiv1(false);
    }
  }, [scrollArea]);

  useEffect(() => {
    changeTitleColor();
    calculateProject();
    calculateDesign();
    calculateClient();
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      clearInterval(titleColorInterval);
    }
  }, [location.pathname]);

  const handleScroll = (event, scroll) => {
    const scrollTOP = scroll.scrollTop;
    const scrollTOP2 = scrollTOP * 2;
    const scrollHEIGHT = window.innerHeight;

    setScrollArea(scroll.scrollTop);

    console.log("SCROLLED AREA : ", scrollTOP);

    document.getElementById("title").style.opacity =
      (scrollHEIGHT - scrollTOP2) / scrollHEIGHT;
  };

  const handleMouseMove = (event) => {
    const xPos = event.clientX;
    const yPos = event.clientY;

    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;

    const xTranslate = (screenWidth / 2 - xPos) / 100;
    const yTranslate = (screenHeight / 2 - yPos) / 100;

    const title = document.getElementById("title");
    title.style.transform = `translate(${xTranslate}px, ${yTranslate}px)`;
  };

  const handleScrollBtnClick = (scroll) => {
    scroll.scrollTop = window.innerHeight;
    setDiv1(true);
    console.log("SCROLLING : ", scroll.scrollTop);
    setScrollArea(scroll.scrollTop);
  };

  const calculateProject = () => {
    let i = 0;
    const projectCalcInterval = setInterval(() => {
      const randomNumber = Math.ceil(Math.random() * 100);

      setRandomProjCalc(randomNumber);

      if (i === 30) {
        clearInterval(projectCalcInterval);
        setRandomProjCalc(236);
      }
      i++;
    }, 100);
  };

  const calculateDesign = () => {
    let i = 0;
    const designtCalcInterval = setInterval(() => {
      const randomNumber = Math.ceil(Math.random() * 100);

      setRandomDesignCalc(randomNumber);

      if (i === 30) {
        clearInterval(designtCalcInterval);
        setRandomDesignCalc(150);
      }
      i++;
    }, 100);
  };

  const calculateClient = () => {
    let i = 0;
    const clientCalcInterval = setInterval(() => {
      const randomNumber = Math.ceil(Math.random() * 100);

      setRandomClientCalc(randomNumber);

      if (i === 30) {
        clearInterval(clientCalcInterval);
        setRandomClientCalc(110);
      }
      i++;
    }, 100);
  };

  const changeTitleColor = () => {
    var randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
    var randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
    var randomColor3 = Math.floor(Math.random() * 16777215).toString(16);
    var randomColor4 = Math.floor(Math.random() * 16777215).toString(16);
    var randomColor5 = Math.floor(Math.random() * 16777215).toString(16);

    console.log("COLOR 1 : ", randomColor1, "COLOR 2 : ", randomColor2);

    let opacity = 0;
    const titleDiv = document.getElementById("title");
    titleDiv.style.opacity = opacity;
    titleDiv.style.backgroundImage = `linear-gradient(to right, #${randomColor1}, #${randomColor2}, #${randomColor3}, #${randomColor4}, #${randomColor5})`;
  };

  return (
    <>
      <Header />
      <div
        className="homepage"
        ref={scrollRef}
        onScroll={(event) => {
          handleScroll(event, scrollRef.current);
        }}
        onMouseMove={(event) => handleMouseMove(event)}
      >
        <div className="main-div1">
          <div className="div1-subdiv1">
            <div className="sentence">
              <div>
                Elevate your brand with captivating <b> UI/UX </b> designs that
                inspire
              </div>
            </div>
            <div className="title" id="title">
              Welcome To UIUX
            </div>
          </div>
          <div className="div1-subdiv2">
            <div className="contact-btn">
              <input
                type="button"
                value="CONTACT US"
                onClick={() => navigate("/contactus")}
              />
            </div>

            <div className="project-count" id="product-count-id">
              <div>
                <div>{randomProjCalc}+ </div> <div> Projects</div>
              </div>
              <div>
                <div>{randomDesignCalc}+ </div> <div> Designs</div>
              </div>
              <div>
                <div>{randomClientCalc}+ </div> <div> Clients</div>
              </div>
            </div>
          </div>
          <div className="scroll-btn">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/shoppingsite-e25c4.appspot.com/o/Animation%20Images%2Fscroll-bar%20(1).png?alt=media&token=4ee4d79a-5764-44e8-b7e1-82f7967ba09f&_gl=1*13mlu7u*_ga*MTQ0NDc5MjA1NS4xNjg1OTU5NDg2*_ga_CW55HF8NVT*MTY4NjA0NjgwNC40LjEuMTY4NjA0Njg5OC4wLjAuMA.."
              alt=""
              onClick={() => handleScrollBtnClick(scrollRef.current)}
            />
          </div>
        </div>

        <div className="projects">
          <div className="services">
            <div className="web-dev services-card">
              <div>
                <img
                  src="https://sketch-cdn.imgix.net/assets/blog/sketch-ui-design%402x.png?ixlib=rb-4.1.0&fit=max&w=1920&q=95&auto=format&fm=png&s=74863334ced26f21e3342c0c375f1dae"
                  alt=""
                />
              </div>
              <div className="content-div">
                <div className="content-title">Web Design</div>
                <div className="content">
                  Web design for UI/UX websites is crucial in creating an
                  engaging and user-friendly digital experience. It involves the
                  strategic combination of visual aesthetics, functionality, and
                  usability. A well-designed UI/UX website focuses on intuitive
                  navigation, clear call-to-actions, and seamless interactions.
                </div>
              </div>
            </div>
            <div className="android-dev services-card">
              <div>
                <img
                  src="https://static.tildacdn.com/tild3635-3462-4130-b833-663465336530/bh_capitalist.png"
                  alt=""
                />
              </div>
              <div className="content-div">
                <div className="content-title">Android App Design</div>
                <div className="content">
                  Android app design for UI/UX websites plays a vital role in
                  delivering an exceptional mobile experience. It involves
                  creating visually appealing and intuitive interfaces that
                  engage users. Effective app design focuses on simplicity and
                  ease of use, with clear navigation and intuitive gestures.
                </div>
              </div>
            </div>
            <div className="ios-dev services-card">
              <div>
                <img
                  src="https://assets.justinmind.com/wp-content/uploads/2018/03/iphone-x-app-design-inspiration-ux-design-jae-seong.png"
                  alt=""
                />
              </div>
              <div className="content-div">
                <div className="content-title">iOS App Design</div>
                <div className="content">
                  iOS app design for UI/UX websites plays a crucial role in
                  delivering a seamless and engaging user experience on Apple
                  devices. It focuses on creating visually stunning and
                  intuitive interfaces that captivate users. Attention to
                  detail, such as precise typography, clean layouts, and
                  consistent iconography, enhances the overall aesthetics and
                  brand recognition.
                </div>
              </div>
            </div>
            <div className="desktop-dev services-card">
              <div>
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/WHAT-IS-WEB-DESIGN.jpg?auto=format&q=60&w=1860&h=1046.25&fit=crop&crop=faces"
                  alt=""
                />
              </div>
              <div className="content-div">
                <div className="content-title">Desktop App Design</div>
                <div className="content">
                  Desktop app design for UI/UX websites is crucial in creating a
                  powerful and user-friendly software experience on desktop
                  platforms. It focuses on delivering a visually appealing and
                  intuitive interface that enhances productivity and user
                  satisfaction. Thoughtful placement of features and intuitive
                  interactions streamline the user journey.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
