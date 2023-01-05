import { TypesWebsThemes } from "@webs-types/themes/TypesWebsThemes";
import * as React from "react";

export type TypesWebsHooksTheme = {
  0: TypesWebsThemes;
  1: React.Dispatch<React.SetStateAction<TypesWebsThemes>>;
};

/**
 * * Dig It Documentation
 *
 * @created 01 03 2023
 * @collection webs hooks
 * @notes [ ]
 *
 */
export function useTheme(): TypesWebsHooksTheme {
  const [theme, setTheme] = React.useState<TypesWebsThemes>("garden");

  React.useEffect(() => {
    const { body } = document;
    body.setAttribute("data-theme", theme);
  }, [theme]);

  return {
    0: theme,
    1: setTheme,
  };
}
