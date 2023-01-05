import { fetcher } from "@webs-library/utils/fetcher";
import { TypesWebsApiMapBasis } from "pages/api/map/basis";
import * as React from "react";
import useSWR from "swr";

export type TypesWebsHooksMap = {
  0: TypesWebsApiMapBasis | undefined;
};

/**
 * * Dig It Documentation
 *
 * @created 01 03 2023
 * @collection webs hooks
 * @notes [ ]
 *
 */
export function useMap() {
  const [mapbasis, setMapBasis] = React.useState<
    TypesWebsApiMapBasis | undefined
  >(undefined);

  const { data: dmapbasis, error: emapbasis } = useSWR<TypesWebsApiMapBasis>(
    "/api/map/basis/",
    fetcher
  );

  React.useEffect(() => {
    //
    // @notes:

    if (!emapbasis && dmapbasis) {
      setMapBasis(dmapbasis);
    } else {
      setMapBasis(undefined);
    }

    // end
    return;
  }, [dmapbasis, emapbasis]);

  return { 0: mapbasis };
}
