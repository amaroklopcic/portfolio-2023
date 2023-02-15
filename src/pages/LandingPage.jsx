function LandingPage() {
  return (
    <div className="container">
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
              color: "#7EBDC4",
            }}
          >Click here</a>
          {" to learn more about me :)"}
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
