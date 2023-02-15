import { cloneElement } from "react";
import "./Carousel.css";

/** Handles CarouselSection elements nested inside by */
function Carousel(props) {
  return (
    <div className="carousel-container" style={props.style}>

      {props.pageIds.map((id, index) => {
        return (
          <a
            key={index}
            className="carousel-btn-link"
            href={`#slide-${index}`}
          >
            {id}
          </a>
        )
      })}

      <hr style={{ width: "25%", color: "#3C7982", border: "1px dotted #3C7982" }} />

      {/* TODO: display clickable dots for each element in the carousel with page nums too */}
      <div className="carousel-rotater">
        {props.children.map((child, index) => {
          return cloneElement(child, { id: `slide-${index}` });
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
