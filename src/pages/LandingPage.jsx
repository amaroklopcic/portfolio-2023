import NorthernLightsBackground from "../components/NorthernLights/NorthernLights";

function LandingPage() {
  return (
    <NorthernLightsBackground>
      <div className="landing-header-text-div">
        <p className="landing-header-text">
          Amar Oklopcic
        </p>
        <p className="landing-header-text" style={{ fontSize: "42px" }}>
          {"Welcome to my portfolio! "}
          <a
            href="#about"
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
              color: "#00218F",
            }}
          >Click here</a>
          {" to see some of my work :)"}
        </p>
      </div>
    </NorthernLightsBackground>
  );
}

export default LandingPage;
