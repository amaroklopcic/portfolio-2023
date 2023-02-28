function LandingPage() {
  return (
    <div className="container">
      <div className="landing-header-text-div">
        <p className="landing-header-text" style={{ color: "#C1EBF1" }}>
          Amar Oklopcic
        </p>
        <p className="landing-header-text-sm">
          {"Welcome to my portfolio! "}
          <a
            href="#about"
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
              color: "#7EBDC4"
            }}>
            Click here
          </a>
          {" to learn more about me :)"}
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
