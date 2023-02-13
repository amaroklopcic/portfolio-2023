import SackboyPNG from "./SackboySony.png";

function AboutSection() {
  return (
    <div
      id="about"
      className="container flex-center"
      style={{ flexDirection: "column" }}
    >
      <div style={{ margin: "auto auto", width: "50vw", textAlign: "center", color: "#F7FFF7" }}>
        <h1 style={{ color: "#C1EBF1", fontSize: "32px" }}>About</h1>
        <div style={{ display: "flex" }}>
          <p style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
            Hi, I'm Amar :)
            <br />
            <br />
            I love software and making things.
            My passion for software engineering came from a very early age, when I
            was about 8 or so and started playing a game called
            <a href="https://en.wikipedia.org/wiki/LittleBigPlanet" style={{ color: "#7EBDC4" }}> "Little Big Planet" </a>
            that lets you make various machines, levels, and other creations using
            a variety of in-game tools including microchips, logic gates, and other
            things. The creativity that the game allowed led me to spend hundreds
            of hours making various creations and made an imprint on my young mind.
            I still have the same joy, wonder, and love for engineering and
            building things today.
          </p>
          <div style={{ margin: "auto 1rem" }}>
            <img
              src={SackboyPNG}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
