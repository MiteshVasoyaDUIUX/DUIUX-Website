import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoadingScreen() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      move();
    }, 100);
  }, []);
  function move() {
    var elem = document.getElementById("progress-bar");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        setTimeout(() => {
          navigate("/");
        }, 500);
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
  return (
    <div className="loading-screen" onLoadedData={() => {}}>
      <div className="loading-content">
        <div className="loading-title">Loading...</div>
        <div className="loading-bar">
          <div id="progress-bar"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
