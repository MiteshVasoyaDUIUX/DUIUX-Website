import React from "react";

function Mhl() {
  const handleImageChange = (event) => {
    const xPos = event.clientX;
    const yPos = event.clientY;

    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;

    const xTranslate = (screenWidth / 2 - xPos) / 2;
    const yTranslate = (screenHeight / 2 - yPos) / 30;

    const img1 = document.getElementById("image-id");
    img1.style.transform = `scale(2) translate(${xTranslate}px, ${yTranslate}px)`;
  };
  return (
    <>
      <div
        className="full-image-mhl"
        onMouseMove={(event) => handleImageChange(event)}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/shoppingsite-e25c4.appspot.com/o/Animation%20Images%2Fmhl.jpg?alt=media&token=d330a759-8865-4fd3-bf60-0f58753d0b58&_gl=1*1cur1u0*_ga*MTQ0NDc5MjA1NS4xNjg1OTU5NDg2*_ga_CW55HF8NVT*MTY4NjIwNzcwMy44LjEuMTY4NjIwNzczOC4wLjAuMA.."
          alt=""
          id="image-id"
        />
      </div>
    </>
  );
}

export default Mhl;
