"use client";
import { ReactLenis } from "lenis/react";

function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        duration: 1.4,
        smoothTouch: false,
        wheelMultiplier: 0.55,
        easing: (t) => 1 - Math.pow(1 - t, 5),
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;

// const SmoothScrollerContext = createContext();

// const ScrollContext = ({ children }) => {
//   const lenis = useRef(null);

//   useEffect(() => {
//     // Initialize Lenis
//     lenis.current = new Lenis({
//       lerp: 0.05, // Control the duration of the scroll
//       easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
//       smooth: true,
//       smoothTouch: true, // Enable smooth scrolling on touch devices
//       wheelMultiplier: 0.65,
//     });

//     const animate = (time) => {
//       lenis.current.raf(time);
//       requestAnimationFrame(animate);
//     };

//     requestAnimationFrame(animate);

//     // Cleanup on unmount
//     return () => {
//       lenis.current.destroy();
//     };
//   }, []);

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     lenis.current.scrollTo(element);
//   };

//   const test = ["1", "2", "3"];

//   return (
//     <SmoothScrollerContext.Provider value={lenis}>
//       {children}
//     </SmoothScrollerContext.Provider>
//   );
// };

// export default ScrollContext;

// "use client";
// import { useEffect, useState, createContext, useContext } from "react";
// import Lenis from "lenis";

// const SmoothScrollerContext = createContext();

//  const useSmoothScroller = () => {
// };

// const ScrollContext = ({ children }) => {
//   const [lenisRef, setLenis] = useState(null);
//   const [rafState, setRaf] = useState(null);

//   useEffect(() => {
//     const scroller = new Lenis({
//       duration: 1.35,

//       wheelMultiplier: 0.65,
//       touchMultiplier: 1.2,
//       easing: (t) => 1 - Math.pow(1 - t, 4),
//       // gestureOrientation: "both",
//       syncTouch: true,
//       touchInertiaMultiplier: 3,
//     });
//     let rf;

//     function raf(time) {
//       scroller.raf(time);
//       requestAnimationFrame(raf);
//     }
//     rf = requestAnimationFrame(raf);
//     setRaf(rf);
//     setLenis(scroller);
//     return () => {
//       if (lenisRef) {
//         cancelAnimationFrame(rafState);
//         lenisRef.destroy();
//       }
//     };
//   }, []);
