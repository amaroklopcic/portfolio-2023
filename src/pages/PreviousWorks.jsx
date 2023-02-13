import { Carousel, CarouselSlide } from "../components/Carousel/Carousel";

function PreviousWorksSection() {
  const previousWork = ["work1", "work2", "work3", "work4"];

  return (
    <div
      id="previous-work"
      className="container"
    >
      <h1 style={{ color: "#C1EBF1", fontSize: "32px" }}>Previous Work</h1>
      <Carousel style={{ width: "800px", height: "500px", margin: "auto auto" }}>
        {previousWork.map((prevWork, index) => {
          return (
            <CarouselSlide key={index}>
              <p>{prevWork}</p>
              <p>ronald</p>
              <p>ayo</p>
            </CarouselSlide>
          )
        })}
      </Carousel>
    </div>
  );
}

export default PreviousWorksSection;
