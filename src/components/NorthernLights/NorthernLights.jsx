import AuroraLights from "./AuroraLights";
import DarkLayer from "./BackgroundOpacityLayer";
import Mountains from "./Mountains.svg";
import "./NorthernLights.css";
import Stars from "./Stars";

function NorthernLights(props) {
  return (
    <div className="container" style={{ position: "fixed" }}>
      {/* TODO: instead of width: 100%, add some media queries to make the mountains bigger*/}
      <div style={{
        width: "100%",
        height: "100%",
        background: `#213033 url(${Mountains}) no-repeat bottom center`,
        backgroundSize: "100% auto",
      }} />
      <div className="auroral-northern" />
      <Stars />
      <AuroraLights />
      <DarkLayer />
    </div>
  )
}

export default NorthernLights;
