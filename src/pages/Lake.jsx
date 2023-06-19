import React from "react";

function Lake() {
  const handleImageChange = (event) => {
    const xPos = event.clientX;
    const yPos = event.clientY;

    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;

    const xTranslate = (screenWidth / 2 - xPos) / 2;
    const yTranslate = (screenHeight / 2 - yPos) / 4;

    const img1 = document.getElementById("image-id");
    img1.style.transform = `scale(2.5) translate(${xTranslate}px, ${yTranslate}px)`;
  };
  return (
    <>
      <div
        className="full-image"
        onMouseMove={(event) => handleImageChange(event)}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/shoppingsite-e25c4.appspot.com/o/Animation%20Images%2Flake.jpg?alt=media&token=0d3b46a9-c970-4558-ad09-da6f0b230a0a&_gl=1*khz5se*_ga*MTQ0NDc5MjA1NS4xNjg1OTU5NDg2*_ga_CW55HF8NVT*MTY4NjIwMzU5MS43LjEuMTY4NjIwMzY0MS4wLjAuMA.."
          alt=""
          id="image-id"
        />
      </div>
    </>
  );
}

export default Lake;
