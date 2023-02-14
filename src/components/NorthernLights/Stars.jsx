import { useEffect, useRef, useState } from "react";

function Stars() {
  // TODO: number of stars should be dynamic based on size of container,
  // since it'll either look really empty or really crowded depending
  // on screen size
  // maybe shoot for something like 1-2 stars per 100x100 px area
  const numberOfStars = 300;

  const [stars, setStars] = useState([]);

  const stageCanvasRef = useRef(null);

  useEffect(() => {
    let width, height;

    if (stageCanvasRef.current) {
      height = stageCanvasRef.current.offsetHeight;
      width = stageCanvasRef.current.offsetWidth;
    }

    // white, Sky blue, Light blue, Jasmine, Mint cream
    const starColors = ["white", "#7EBDC4", "#C1EBF1", "#F4D06F", "#F7FFF7"];

    const starPositions = [];
    for (let i = 0; i < numberOfStars; i++) {
      const x = Math.ceil(Math.random() * width);
      const y = Math.ceil(Math.random() * height);
      const opacity = Math.min(Math.random() + 0.1, 0.6);
      const size = Math.round(6 * Math.random());
      const index = Math.min(size, 4);
      const color = starColors[index];
      starPositions.push([x, y, size, opacity, color]);
    }

    setStars(starPositions);
  }, [stageCanvasRef]);

  return (
    <div
      ref={stageCanvasRef}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {stars.map((starPos, index) => {
        return <span
          key={index}
          style={{
            position: "absolute",
            width: `${starPos[2]}px`,
            height: `${starPos[2]}px`,
            left: starPos[0],
            top: starPos[1],
            opacity: starPos[3],
            backgroundColor: starPos[4],
            borderRadius: "50%",
          }}
        />
      })}
    </div>
  )
}

export default Stars;
