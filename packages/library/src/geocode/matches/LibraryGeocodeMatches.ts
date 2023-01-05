/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { TypesGeocodeMatch } from "../_types/TypesGeocodeMatch";
import { TypesResolveLibraryGeocodeMatches } from "./TypesResolveLibraryGeocodeMatches";
import { LibraryGeocodeMatchesFilter } from "./_filter/LibraryGeocodeMatchesFilter";

/**
 * * Dig It Documentation
 *
 * @created 09 16 2022
 * @collection library asynchronous function
 * @notes [ ]
 *
 */
export const LibraryGeocodeMatches = async (
  query: string,
  apikey: string
): Promise<TypesResolveLibraryGeocodeMatches> => {
  try {
    const encquery = encodeURIComponent(query);
    const qs = `https://autocomplete.search.hereapi.com/v1/autocomplete?q=${encquery}&apiKey=${apikey}&limit=8&lang=en-US`;

    const { data: DATA_GEOCODE_MATCHES } = await axios.get(qs);

    if (!DATA_GEOCODE_MATCHES) {
      return `#-response`;
    }

    if (!DATA_GEOCODE_MATCHES.items || !DATA_GEOCODE_MATCHES.items.length) {
      return `#-response-list`;
    }

    const { items: DATA_GEOCODE_ITEMS } = DATA_GEOCODE_MATCHES;

    const items = DATA_GEOCODE_ITEMS.filter(
      (ri: any) =>
        !!(
          ri?.resultType === "street" ||
          ri?.resultType === "houseNumber" ||
          ri?.resultType === "locality" ||
          ri?.resultType === "administrativeArea"
        )
    );

    const result = items
      .map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (geores: any): TypesGeocodeMatch | undefined => {
          const mf = LibraryGeocodeMatchesFilter(geores);
          return mf;
        }
      )
      .filter((i: any) => !!i) as TypesGeocodeMatch[]; // @todo unsafe

    if (!result || !result.length) {
      return `#-result`;
    }

    return result;
  } catch (e) {
    return `#`;
  }
};
