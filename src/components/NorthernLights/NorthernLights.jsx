import AuroraLights from "./AuroraLights";
import DarkLayer from "./BackgroundOpacityLayer";
import Mountains from "./Mountains.svg";
import "./NorthernLights.css";
import Stars from "./Stars";

function NorthernLights(props) {
  return (
    <div className="container" style={{ position: "fixed" }}>
      {/* TODO: instead of width: 100%, add some media queries to make the mountains bigger */}
      <div
        style={{
          width: "100%",
          height: "100%",
          background: `#213033`,
        }}
      >
        <Stars />
        <img
          src={Mountains}
          alt="distant mountains"
          style={{
            position: "absolute",
            display: "block",
            width: "100%",
            height: "auto",
            bottom: 0,
            objectFit: "cover"
          }}
        />

      </div>
      <div className="auroral-northern" />
      <AuroraLights />
      <DarkLayer />
    </div>
  )
}

export default NorthernLights;
