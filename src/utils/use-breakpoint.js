import { useEffect, useState } from "react";

function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState("xs");
  const [timer, setTimer] = useState();

  const onResize = () => {
    if (timer) clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        const width = document.body.offsetWidth;
        if (width > 0 && width < 600) {
          setBreakpoint("xs");
        } else if (width > 600 && width < 900) {
          setBreakpoint("sm");
        } else if (width > 900 && width < 1200) {
          setBreakpoint("md");
        } else if (width > 1200 && width < 1536) {
          setBreakpoint("lg");
        } else {
          setBreakpoint("xl");
        }
      }, 200)
    );
  };

  useEffect(() => {
    window.addEventListener("resize", onResize, { passive: true });
    return function() {
      window.removeEventListener("resize", onResize);
    };
  });
  return breakpoint;
}

export default useBreakpoint;
