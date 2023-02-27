import { useEffect, useRef, useState } from "react";
import Mountains from "./Mountains.svg";

function MountainsBackground(props) {
  const imageFadeWidthVw = 5;

  const { contentWidth, setContentWidth } = props;

  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageBoundsX, setImageBoundsX] = useState(null);

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const imageRef = useRef(null);

  useEffect(() => {
    const onResize = () => setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
    window.removeEventListener('resize', onResize);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    let imageBounds;

    if (imageRef.current) {
      imageBounds = imageRef.current.getBoundingClientRect();
    }

    if (imageBounds) {
      setImageBoundsX(imageBounds.x);
      const approxContentWidth = `calc(${Math.ceil(imageBounds.width)}px - ${imageFadeWidthVw * 2}vw)`;
      if (contentWidth !== approxContentWidth) {
        setContentWidth(approxContentWidth);
      }
    }
  }, [imageRef, imageBoundsX, imageLoaded, dimensions, contentWidth, setContentWidth]);

  const fadeStyle = {
    position: "absolute",
    height: "100%",
    width: `${imageFadeWidthVw}vw`,
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        overflow: "hidden",
        bottom: 0,
        display: "flex",
      }}
    >
      <div
        style={{
          ...fadeStyle,
          width: "5000px",
          backgroundColor: "#192426",
          left: imageBoundsX ? imageBoundsX - 5000 : -100000,
          zIndex: 500,
        }}
      />
      <div
        style={{
          ...fadeStyle,
          backgroundImage: "linear-gradient(-90deg, transparent 0%, #192426 50%)",
          left: imageBoundsX ? imageBoundsX : -500,
          zIndex: 500,
        }}
      />
      <img
        ref={imageRef}
        src={Mountains}
        onLoad={() => setImageLoaded(true)}
        alt="distant mountains"
        style={{
          height: "auto",
          maxHeight: "70vh",
          maxWidth: "100vw",
          margin: "auto auto",
          marginBottom: 0,
          objectFit: "fill",
        }}
      />
      <div
        style={{
          ...fadeStyle,
          backgroundImage: "linear-gradient(90deg, transparent 0%, #192426 50%)",
          right: imageBoundsX ? imageBoundsX : -500,
          zIndex: 500
        }}
      />
      <div
        style={{
          ...fadeStyle,
          width: "5000px",
          backgroundColor: "#192426",
          right: imageBoundsX ? imageBoundsX - 5000 : -100000,
          zIndex: 500,
        }}
      />
    </div>
  )
}

export default MountainsBackground;
