import { cloneElement } from "react";
import "./Carousel.css";

/** Handles CarouselSection elements nested inside by */
function Carousel(props) {
  return (
    <div className="carousel-container" style={props.style}>

      {props.children.map((prevWork, index) => {
        return (
          <a
            key={index}
            className="carousel-btn-link"
            href={`#slide-${index + 1}`}
          >
            {index + 1}
          </a>
        )
      })}

      {/* TODO: display clickable dots for each element in the carousel with page nums too */}
      <div className="carousel-rotater">
        {props.children.map((child, index) => {
          return cloneElement(child, { id: `slide-${index + 1}` });
        })}
      </div>
    </div>
  )
}

function CarouselSlide(props) {
  return (
    <div className="carousel-section" id={props.id}>
      <div className="carousel-contents">
        {props.children}
      </div>
    </div>
  )
}

export { Carousel, CarouselSlide };
