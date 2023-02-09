import "./NorthernLights.css";

function AuroraLights() {
  const numberOfLights = 50;

  const colorVariations = [
    "#a1d9b4",
    "#32988a",
    "#000e3c"
  ];

  const lights = [];
  for (let i = 0; i < numberOfLights; i++) {
    const randomColor = colorVariations[
      Math.floor(Math.random() * colorVariations.length)
    ];
    const x = i * Math.random();
    const y = i * Math.random();
    const duration = 5 + Math.floor(10 * Math.random());
    const delay = 4 + Math.floor(10 * Math.random());
    const scale = 0.1 * Math.random();
    lights.push([randomColor, duration, delay, x, y, scale]);
  }

  return (
    <div className="lights">
      {lights.map((light, index) => {
        console.log(light[1], light[2])
        return (
          <div
            key={index}
            className="light"
            style={{
              // backgroundColor: light[0],
              animationDuration: `${light[1]}s`,
              // animationDelay: `${light[2]}s`,
              x: light[3],
              y: light[4],
              scale: light[5]
            }}
          />
        )
      })}
    </div>
  );
}

export default AuroraLights;
