import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false); // Start with `false` to prevent SSR mismatch

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure it runs only on the client

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const updateState = () => setIsMobile(mql.matches);

    mql.addEventListener("change", updateState);
    updateState(); // Set initial state on mount

    return () => mql.removeEventListener("change", updateState);
  }, []);

  return isMobile;
}
