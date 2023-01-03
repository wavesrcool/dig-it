import { useRouter } from "next/router";
import * as React from "react";

export type TypesWebsHooksLocale = string;

/**
 * * Dig It Documentation
 *
 * @created 01 03 2023
 * @collection webs hooks
 * @notes [ ]
 *
 */
export function useLocale() {
  const [locale, setLocale] = React.useState<TypesWebsHooksLocale>("en");

  const { locale: locale0 } = useRouter();

  React.useEffect(() => {
    //
    // @notes:
    if (locale0) {
      setLocale(locale0);
    }
    // end
    return;
  }, [locale0]);

  return locale;
}
