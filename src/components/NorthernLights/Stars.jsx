import { useEffect, useRef, useState } from "react";

function Stars() {
  // TODO: number of stars should be dynamic based on size of container,
  // since it'll either look really empty or really crowded depending
  // on screen size
  const numberOfStars = 500;

  const [stars, setStars] = useState([]);

  const stageCanvasRef = useRef(null);

  useEffect(() => {
    let width, height;

    if (stageCanvasRef.current) {
      height = stageCanvasRef.current.offsetHeight;
      width = stageCanvasRef.current.offsetWidth;
    }

    const starPositions = [];
    for (let i = 0; i < numberOfStars; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const opacity = (1 - (y / height)) / 1.3;
      const size = Math.ceil(3 * Math.random());
      starPositions.push([x, y, size, opacity]);
    }

    setStars(starPositions);
  }, [stageCanvasRef]);

  return (
    <div
      ref={stageCanvasRef}
      style={{
        width: "100%",
        height: "100%",
        minWidth: "100%",
        minHeight: "100%",
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
            backgroundColor: "white",
            opacity: starPos[3],
          }}
        />
      })}
    </div>
  )
}

export default Stars;
