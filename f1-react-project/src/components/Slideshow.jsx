import { useState } from "react";
import "../css/Slideshow.css";

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // Array of slideshow images
  const images = [
    `${process.env.PUBLIC_URL}/images/slideshow/slide1.avif`,
    `${process.env.PUBLIC_URL}/images/slideshow/slide2.avif`,
    `${process.env.PUBLIC_URL}/images/slideshow/slide3.avif`,
    `${process.env.PUBLIC_URL}/images/slideshow/slide4.avif`,
  ];

  const slideForward = () => {
    setSlideIndex(slideIndex < images.length - 1 ? slideIndex + 1 : 0);
  };

  const slideBackward = () => {
    setSlideIndex(slideIndex > 0 ? slideIndex - 1 : images.length - 1);
  };

  return (
    <section className="slideshow">
      <img src={images[slideIndex]} alt={`F1 slide ${slideIndex + 1}`} />
      <button
        className="arrow"
        onClick={slideForward}
        id="right-arrow"
        aria-label="Next slide"
      >
        &gt;
      </button>
      <button
        className="arrow"
        onClick={slideBackward}
        id="left-arrow"
        aria-label="Previous slide"
      >
        &lt;
      </button>
    </section>
  );
};

export default Slideshow;