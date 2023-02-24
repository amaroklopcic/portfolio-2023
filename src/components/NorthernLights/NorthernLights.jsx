import AuroraLights from "./AuroraLights";
import DarkLayer from "./BackgroundOpacityLayer";
import Mountains from "./Mountains.svg";
import "./NorthernLights.css";
import Stars from "./Stars";

function NorthernLights(props) {
  return (
    <div className="container" style={{ position: "fixed" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          background: `#213033`,
        }}
      >
        <Stars />
        {/* TODO: mountains need to be redone in a way that makes them tileable.
            they currently take up the entire screen with ultrawide monitors.
            the SVG cant stretch and we cant repeat it, since the moon is included
            in the svg and we dont want multiple moons.
        */}
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
