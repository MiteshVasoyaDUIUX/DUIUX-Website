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
  const [servicesCards, setServicesCards] = useState([]);
  const [activeServiceCard, setActiveServiceCard] = useState(0);

  let titleColorInterval;

  useEffect(() => {
    if (
      scrollArea >= window.innerHeight &&
      scrollArea <= 2 * window.innerHeight
    ) {
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

  useEffect(() => {
    setServicesCards(document.querySelectorAll(".card"));
  }, []);

  //Change Card Style...

  useEffect(() => {
    // console.log(servicesCards);

    if (servicesCards.length > 0) {
      if (activeServiceCard === 0) {
        console.log("S : ", activeServiceCard);
        servicesCards[2].style = "border : 2px solid blue; right : 0;";
        servicesCards[activeServiceCard].style =
          "border : 4px solid yellow;left: 35%;";
        servicesCards[activeServiceCard + 1].style =
          "border : 2px solid green; right : 0";
      } else if (activeServiceCard === 2) {
        console.log("SAS : ", activeServiceCard);
        servicesCards[activeServiceCard - 1].style =
          "border : 2px solid blue; right : 0";
        servicesCards[activeServiceCard].style =
          "border : 4px solid yellow;left: 35%;";
        servicesCards[0].style = "border : 2px solid green; left : 0";
      } else if (activeServiceCard > 0) {
        console.log(
          "AASAS : ",
          activeServiceCard,
          activeServiceCard - 1,
          activeServiceCard + 1
        );
        servicesCards[activeServiceCard + 1].style =
          "border : 2px solid green; right : 0";
        servicesCards[activeServiceCard - 1].style =
          "border : 4px solid blue; right : 0";
        servicesCards[activeServiceCard].style =
          "border : 2px solid yellow;right: 35%;";
      }
    }
  }, [activeServiceCard]);

  const handleScroll = (event, scroll) => {
    const scrollTOP = scroll.scrollTop;
    const scrollTOP2 = scrollTOP * 2;
    const scrollHEIGHT = window.innerHeight;

    setScrollArea(scroll.scrollTop);

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
    scroll.scrollTop = window.innerHeight - "22";
    setDiv1(true);
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

    let opacity = 0;
    const titleDiv = document.getElementById("title");
    titleDiv.style.opacity = opacity;
    titleDiv.style.backgroundImage = `linear-gradient(to right, #${randomColor1}, #${randomColor2}, #${randomColor3}, #${randomColor4}, #${randomColor5})`;
  };

  const handlePrevBtn = () => {
    if (activeServiceCard - 1 >= 0) {
      setActiveServiceCard(activeServiceCard - 1);
      // console.log("CLICK BUTTON  + 1  : ", activeServiceCard);
    } else {
      setActiveServiceCard(servicesCards.length - 1);
      // console.log("CLICK BUTTON : ", activeServiceCard);
    }
  };

  const handleNextBtn = () => {
    if (activeServiceCard + 1 <= servicesCards.length - 1) {
      setActiveServiceCard(activeServiceCard + 1);
      // console.log("CLICK BUTTON  + 1  : ", activeServiceCard);
    } else {
      setActiveServiceCard(0);
      // console.log("CLICK BUTTON : ", activeServiceCard);
    }
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
            <p className="title">Services</p>
            <div className="card-slider">
              <div className="prev-btn" onClick={handlePrevBtn}></div>
              <div className="cards-container">
                <div className="web card">
                  <p>Website</p>
                </div>
                <div className="android card">
                  <p>Android</p>
                </div>
                <div className="ios card">
                  <p>iOS</p>
                </div>
              </div>
              <div className="next-btn" onClick={handleNextBtn}></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
