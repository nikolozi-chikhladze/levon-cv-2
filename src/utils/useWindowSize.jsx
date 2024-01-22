import { useEffect, useState } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export const useWindowSize = () => {
  const [isMobile, setIsMobile] = useState(getWindowDimensions().width <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(getWindowDimensions().width <= 480);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile };
};
