import NorthernLightsBackground from "../components/NorthernLights/NorthernLights";

function LandingPage() {
  return (
    <NorthernLightsBackground>
      <div className="landing-header-text-div">
        <p className="landing-header-text">Hello!</p>
        <p className="landing-header-text">My name is Amar Oklopcic.</p>
        <p className="landing-header-text" style={{ fontSize: "46px" }}>
          <button
            className="btn-fake-link"
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
              color: "#000E3C",
              fontSize: "46px"
            }}
          >
            {"Click here "}
          </button>
          to see some of my work :)
        </p>
      </div>
    </NorthernLightsBackground>
  );
}

export default LandingPage;
