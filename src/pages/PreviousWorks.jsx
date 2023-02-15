import { Carousel, CarouselSlide } from "../components/Carousel/Carousel";
import previousWorksData from "../data/previous-works.json";

function PreviousWorksSection() {
  return (
    <div
      id="previous-work"
      className="container"
    >
      <h1 style={{ color: "#C1EBF1", fontSize: "32px", marginBottom: "3rem" }}>Previous Work</h1>
      <Carousel
        style={{ width: "800px", height: "500px", margin: "auto auto" }}
        pageIds={previousWorksData.map((prevWork) => prevWork.id)}
      >
        {previousWorksData.map((data, index) => {
          return (
            <CarouselSlide key={index}>
              <h1 style={{ marginBottom: "1rem" }}>{data.name}</h1>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "50%", margin: "0.5rem" }}>
                  <img
                    src={data["image-link"] || "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"}
                    alt="placeholder"
                    style={{
                      width: "100%",
                      borderRadius: "6px"
                    }}
                  />
                </div>
                <div style={{ width: "50%", margin: "0.5rem" }}>
                  <p>{data["date-developed"]}</p>
                  <p>{data.description}</p>
                </div>
              </div>
              <div style={{ textAlign: "left", marginLeft: "1rem" }}>
                <h3 style={{ marginBottom: "0.5rem" }}>Tech Used</h3>
                <div style={{ display: "flex", "flexWrap": "wrap" }}>
                  {data["tech-used"].map((techName, index) => {
                    return <span
                      key={index}
                      style={{
                        background: "#68B684",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "6px",
                        margin: "4px"
                      }}
                    >{techName}</span>
                  })}
                </div>
              </div>
            </CarouselSlide>
          )
        })}
      </Carousel>
    </div>
  );
}

export default PreviousWorksSection;
