import { useRef } from "react";

export default function Carousel({ onSlide, children }) {
  const index = useRef(0);
  function prev() {
    index.current--;
    onSlide(index.current);
  }
  function next() {
    index.current++;
    onSlide(index.current);
  }
  return (
    <div id="carouselExample" className="carousel slide bg-black text-white">
      <div className="carousel-inner">{children}</div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
        onClick={prev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
        onClick={next}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
