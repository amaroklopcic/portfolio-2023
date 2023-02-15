import SackboyPNG from "./SackboySony.png";

function AboutSection() {
  return (
    <div
      id="about"
      className="container flex-center"
      style={{ flexDirection: "column" }}
    >
      <div style={{ margin: "auto auto", width: "50vw", textAlign: "center", color: "#F7FFF7" }}>
        <h1 style={{ color: "#C1EBF1", fontSize: "32px", marginBottom: "3rem" }}>About</h1>
        <div style={{ display: "flex" }}>
          <p style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
            Hi, I'm Amar :)
            <br />
            <br />
            I love software and making things.
            My passion for software engineering came from a very early age, when I
            was about 8 or so and started playing a game called{" "}
            <a
              href="https://en.wikipedia.org/wiki/LittleBigPlanet"
              style={{ color: "#7EBDC4" }}
            >
              "Little Big Planet"
            </a>
            {" "}that lets you make various machines, levels, and other creations using
            a variety of in-game tools including microchips, logic gates, and other
            things. The creativity that the game allowed led me to spend hundreds
            of hours making various creations and made an imprint on my young mind.
            I still have the same joy, wonder, and love for engineering and
            building things today.
            <br />
            <br />
            I started tinkering with programming when I was about 15 or so in high school,
            and started really taking it more seriously when I was 16. My first piece of software
            that I released into the world was an addon for video game called "Garry's Mod" when
            I was just 16. I was really proud of it since it involved a lot of vector mathematics
            which was difficult for me at that age but I fell in love with programming because of
            how rewarding it was when I got it working. Other people loved it as well, it got almost
            17,000 downloads and was rated 5 out of 5 stars on the{" "}
            <a
              href="https://steamcommunity.com/sharedfiles/filedetails/?id=934097023"
              style={{ color: "#7EBDC4" }}
            >
              Steam workshop
            </a>.
          </p>
          <div style={{ margin: "auto 1rem" }}>
            <img
              src={SackboyPNG}
              alt="little big planet sackboy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
