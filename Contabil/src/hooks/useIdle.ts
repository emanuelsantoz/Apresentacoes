import { useEffect, useState } from "react";

/** true após `ms` sem movimento de mouse/toque. */
export function useIdle(ms = 2000) {
  const [idle, setIdle] = useState(false);
  useEffect(() => {
    let timer = window.setTimeout(() => setIdle(true), ms);
    const wake = () => {
      setIdle(false);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setIdle(true), ms);
    };
    const events = ["mousemove", "mousedown", "touchstart", "keydown"] as const;
    events.forEach((e) => window.addEventListener(e, wake, { passive: true }));
    return () => {
      window.clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, wake));
    };
  }, [ms]);
  return idle;
}
