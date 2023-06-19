import React from "react";
import "./Portfolio.css";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

function Portfolio() {
  const location = useLocation();

  console.log("LOCATION : ", location.pathname);
  return (
    <>
      <div className="portfolio-page">
        <div className="page-title">OUR WORK</div>
        <div className="card-grid">
          <div className="grid1">
            <div className="card">
              <div className="img">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/shoppingsite-e25c4.appspot.com/o/Animation%20Images%2Fbranding.gif?alt=media&token=7c4750af-db8a-4744-bf46-1df1eb27f3d9"
                  alt=""
                />
              </div>
              <div className="card-title">Branding</div>
            </div>
          </div>
          <div className="grid2">
            <div className="card">
              <div className="img">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/shoppingsite-e25c4.appspot.com/o/Animation%20Images%2FAndroid%20UI%20Deisgn.jpg?alt=media&token=0ca41ca3-1627-4ead-95c5-18121853375a"
                  alt=""
                />
              </div>
              <div className="card-title">Android UI Design</div>
            </div>
            <div className="card">
              <div className="img">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/shoppingsite-e25c4.appspot.com/o/Animation%20Images%2Fweb%20design.avif?alt=media&token=350891d2-159d-40a8-bfeb-fdac8d9f45cd"
                  alt=""
                />
              </div>
              <div className="card-title">Web Design</div>
            </div>

            <div className="card">
              <div className="img">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/shoppingsite-e25c4.appspot.com/o/Animation%20Images%2FIOS%20Deisgn.webp?alt=media&token=f56c7d21-5d8e-42a2-a996-699f9e428d42"
                  alt=""
                />
              </div>
              <div className="card-title">iOS Design</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Portfolio;
