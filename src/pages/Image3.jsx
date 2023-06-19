import React from "react";

function Image3() {
  const handleImageChange = (event) => {
    const xPos = event.clientX;
    const yPos = event.clientY;

    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;

    const xTranslate = (screenWidth / 2 - xPos) / 4;
    const yTranslate = (screenHeight / 2 - yPos) /5;

    const img1 = document.getElementById("image-id");
    img1.style.transform = `scale(1.5) translate(${xTranslate}px, ${yTranslate}px)`;
  };

  return (
    <>
      <div
        className="full-image3"
        onMouseMove={(event) => handleImageChange(event)}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/shoppingsite-e25c4.appspot.com/o/Animation%20Images%2Falessandro-carrarini.jpg?alt=media&token=495db2ac-e8a9-4e05-a71c-81192abe5df1&_gl=1*p8wvfu*_ga*MTQ0NDc5MjA1NS4xNjg1OTU5NDg2*_ga_CW55HF8NVT*MTY4NjIwNzcwMy44LjEuMTY4NjIwNzcxMy4wLjAuMA.."
          alt=""
          id="image-id"
        />
      </div>
    </>
  );
}

export default Image3;
