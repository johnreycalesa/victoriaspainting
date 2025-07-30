import React, { useEffect, useState } from "react";
import "../../../assets/css/Landing_Slider.css";
import "../../../assets/css/fonts.css";
import img1 from "../../../assets/img/slide_1.webp";
import img2 from "../../../assets/img/slide_2.webp";

export function LandingSlider() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex === getTotalSlides() ? 1 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  function plusSlides(n) {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > getTotalSlides()) {
        return 1;
      } else if (newIndex < 1) {
        return getTotalSlides();
      } else {
        return newIndex;
      }
    });
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  function getTotalSlides() {
    return document.getElementsByClassName("mySlides").length;
  }

  function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  useEffect(() => {
    showSlides();
  }, [slideIndex]);

  return (
    <div id="slider">
      <div className="slideshow-container">
        <div className="mySlides fade">
          <img src={img1} style={{ width: "100%" }} alt="Slide 1" />
        </div>

        <div className="mySlides fade">
          <img src={img2} style={{ width: "100%" }} alt="Slide 2" />
        </div>

        <button className="prev" onClick={() => plusSlides(-1)}>
          ❮
        </button>
        <button className="next" onClick={() => plusSlides(1)}>
          ❯
        </button>
      </div>
      <br />

      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
      </div>
    </div>
  );
}
