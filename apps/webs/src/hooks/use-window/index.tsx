import * as React from "react";

export type TypesWebsHooksWindow = {
  0: number;
  1: number;
};

/**
 * * Dig It Documentation
 *
 * @created 01 03 2023
 * @collection webs hooks
 * @notes [ ]
 *
 */
export function useWindow(): TypesWebsHooksWindow {
  const [wind, setWind] = React.useState<TypesWebsHooksWindow>({
    0: 0,
    1: 0,
  });

  React.useEffect(() => {
    function handleResize() {
      const w: TypesWebsHooksWindow = [window.innerWidth, window.innerHeight];
      setWind(w);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return wind;
}
