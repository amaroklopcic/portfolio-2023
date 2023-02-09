import { Carousel, CarouselSlide } from "../components/Carousel/Carousel";

function PreviousWorksSection() {
  const previousWork = ["work1", "work2"];

  return (
    <div
      id="previous-work"
      className="container"
      style={{ backgroundColor: "black" }}
    >
      <Carousel style={{ width: "500px" }}>
        {previousWork.map((prevWork, index) => {
          return (
            <CarouselSlide key={index}>
              <p>{prevWork}</p>
            </CarouselSlide>
          )
        })}
      </Carousel>
    </div>
  );
}

export default PreviousWorksSection;
