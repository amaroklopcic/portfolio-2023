import "./Carousel.css";

/** Handles CarouselSection elements nested inside by */
function Carousel(props) {
  return (
    <div className="carousel-container" style={props.style}>
      <div className="carousel-rotater">
        {props.children}
      </div>
      {/* TODO: display clickable dots for each element in the carousel with page nums too */}
      <div>
        {props.children.map((prevWork, index) => {
          return (
            <button onClick>.</button>
          )
        })}
      </div>
    </div>
  )
}

function CarouselSlide(props) {
  return (
    <div className="carousel-section">
      {props.children}
    </div>
  )
}

export { Carousel, CarouselSlide };
