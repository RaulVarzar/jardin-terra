import { useState, useEffect } from "react";

const useScreenWidth = (threshold = 1024) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width <= threshold;
};

export default useScreenWidth;
