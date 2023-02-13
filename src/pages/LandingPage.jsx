import NorthernLightsBackground from "../components/NorthernLights/NorthernLights";

function LandingPage() {
  return (
    <NorthernLightsBackground>
      <div className="landing-header-text-div">
        {/* TODO: need to split the mountains svg image into several components,
          the moon, so we can make it glow or remove it entirely and just show aurora lights,
          the stars, so we can add our own and make a couple of them dynamically brighter/dimmer,
          the background, so when we add our own stars we can lay the mountains on top of them
        */}
        {/* TODO: make the image scale with screen size and make it unaffected by zoom */}
        <p className="landing-header-text" style={{ color: "#C1EBF1" }}>
          Amar Oklopcic
        </p>
        <p className="landing-header-text" style={{ fontSize: "32px" }}>
          {"Welcome to my portfolio! "}
          <a
            href="#about"
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
              color: "#50A1AB",
            }}
          >Click here</a>
          {" to see some of my work :)"}
        </p>
      </div>
    </NorthernLightsBackground>
  );
}

export default LandingPage;
