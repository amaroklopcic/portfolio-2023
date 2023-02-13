import { useEffect, useRef, useState } from "react";

function DarkLayer() {
  const stageCanvasRef = useRef(null);

  const [totalHeight, setTotalHeight] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (stageCanvasRef.current) {
      let height = stageCanvasRef.current.offsetHeight;
      setTotalHeight(height);
    }
  }, [stageCanvasRef]);

  const opacity = Math.min(Math.ceil(100 / (totalHeight / offset)), 60);

  return (
    <div
      ref={stageCanvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        opacity: `${opacity}%`,
        backgroundColor: "black",
        width: "100%",
        height: "100%",
        transition: "opacity 1s"
      }}
    />
  )
}

export default DarkLayer;
