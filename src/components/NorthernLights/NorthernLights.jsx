import { useState } from "react";
import AuroraLights from "./AuroraLights";
import DarkLayer from "./BackgroundOpacityLayer";
import MountainsBackground from "./MountainsBackground/MountainsBackground";

import "./NorthernLights.css";
import Stars from "./Stars";

function NorthernLightsBackground(props) {
  const styling = props.style || {};

  const [contentWidth, setContentWidth] = useState(null);

  return (
    <div style={styling}>
      <div className="container" style={{ position: "fixed" }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            background: `#213033`
          }}>
          <Stars />
          <MountainsBackground contentWidth={contentWidth} setContentWidth={setContentWidth} />
        </div>
        <div className="auroral-northern" />
        <AuroraLights />
        <DarkLayer />
      </div>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100vw" }}>
        <div
          style={{
            width: contentWidth,
            maxWidth: contentWidth,
            margin: "auto auto"
          }}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default NorthernLightsBackground;
